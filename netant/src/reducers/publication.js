import { handleActions } from 'redux-actions'
import {
  fetchPubStarted,
  fetchPubFailed,
  fetchPubSucceeded
} from '../actions/publication'

const DEFAULT_STATE = {
  isFetching: false,
  pubmedId: '',
  summary: null
}

const publication = handleActions(
  {
    [fetchPubStarted]: (state, payload) => {
      console.log('NCBI Fetch start:', payload)
      return {
        ...state,
        pubmedId: payload.payload,
        isFetching: true
      }
    },
    [fetchPubSucceeded]: (state, payload) => {
      return { ...state, summary: payload.summary, isFetching: false }
    },
    [fetchPubFailed]: (state, payload) => {
      return { ...state, isFetching: false }
    }
  },
  DEFAULT_STATE
)

export default publication
