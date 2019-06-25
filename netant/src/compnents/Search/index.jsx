import React, {useState, useEffect} from 'react'
import Autosuggest from 'react-autosuggest'
import { debounce } from 'throttle-debounce'

import './style.css'

const DELAY = 500 // ms

const ES_URL = 'http://localhost:9200/netant-terms/_search'

const Search = () => {

  const baseStyle = {
    height: '100%',
    width: '100%'
  }

  // Use 2 states: user input and suggestions returned from ES.
  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState('')

  let onSuggestionsFetchRequested = ({ value }) => {

    const query = {
      "suggest": {
        "term-suggest" : {
          "prefix" : value,
          "completion" : {
            "field" : "term_suggest",
            "skip_duplicates": true,
            "size": 6,
            "fuzzy" : {
              "prefix_length": 3,
              "fuzziness" : 0
            }
          }
        }
      }
    }

    const settings = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    }


    fetch(ES_URL, settings)
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log('RES+++++++++0', json)
        const suggest = json.suggest['term-suggest'][0].options
        console.log('RES+++++++++', json, suggest)
        setSuggestions(suggest)
      })
  }

  useEffect(() => {
    onSuggestionsFetchRequested = debounce(
      DELAY,
      onSuggestionsFetchRequested
    )

  }, [value])


  const renderSuggestion = suggestion => {
    // console.log("RENDER sug:", suggestion)
    const src = suggestion['_source']

    return (
      <div className='result'>
        <div>{src.term}</div>
        <div className='tags'>
          <div className="source">{src.source}</div>
          <div className="type">{src.term_type}</div>
        </div>
      </div>
    )
  }

  

  const onChange = (event, { newValue }) => {
    setValue(newValue)

  }


  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }


  const inputProps = {
    placeholder: 'Enter gene, disease, drug or function name',
      value,
      onChange
  }

  return (
    <div className='container'>
      <h1>NetAnt Input Demo</h1>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={suggestion => suggestion['_source'].term}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  )
}

export default Search