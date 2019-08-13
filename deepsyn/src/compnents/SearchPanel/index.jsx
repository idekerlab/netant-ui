import React, { useState, useEffect } from 'react'
import Autosuggest from 'react-autosuggest'
import { debounce } from 'throttle-debounce'

import './style.css'

const DELAY = 500 // ms

const ES_URL = 'http://localhost:9200/netant-terms/_search'

const SearchPanel = () => {
  const baseStyle = {
    height: '100%',
    width: '100%'
  }

  // Use 2 states: user input and suggestions returned from ES.
  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState('')

  let onSuggestionsFetchRequested = ({ value }) => {

    const query = {
      suggest: {
        'term-suggest': {
          prefix: value,
          completion: {
            field: 'term_suggest',
            skip_duplicates: true,
            size: 6,
            fuzzy: {
              prefix_length: 3,
              fuzziness: 0
            }
          }
        }
      }
    }

    console.log("Query:::", query)

    const settings = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    }

    console.log("SETTING:::", settings)

    fetch(ES_URL, settings)
      .then(res => {
        console.log('FETCH_________+++++++++0', res)
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json()
      }).then(json => {
        console.log('RES+++++++++0', json)
        const suggest = json.suggest['term-suggest'][0].options
        console.log('RES+++++++++', json, suggest)
        setSuggestions(suggest)
      }).catch((err) => {
        console.error('ERRRR:', err)
      })

  }

  useEffect(() => {
    console.log("EFFECT:", value)
    onSuggestionsFetchRequested = debounce(DELAY, onSuggestionsFetchRequested)
  }, [value])

  const renderSuggestion = suggestion => {
    console.log("RENDER sug:", suggestion)
    const src = suggestion['_source']

    return (
      <div className="result">
        <div>{src.term}</div>
        <div className="tags">
          <div className="source">{src.source}</div>
          <div className="type">{src.term_type}</div>
        </div>
      </div>
    )
  }

  const onChange = (event, { newValue }) => {
    console.log('### Change', newValue)
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
    <div className="container">
      <h1>DeepSyn</h1>
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

export default SearchPanel
