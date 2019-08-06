import { handleActions } from 'redux-actions'
import {
  addTerms,
  clearTerms,
  searchStarted,
  searchSucceeded,
  searchFailed
} from '../actions/search'

const DEFAULT_STATE = {
  isRunning: false,
  termSet: new Set(),
  results: null
}

const search = handleActions(
  {
    [addTerms]: (state, payload) => {
      return { ...state, termList: new Set([...state.termSet, ...payload]) }
    },
    [clearTerms]: (state, payload) => {
      return { ...state, termSet: new Set() }
    },
    [searchStarted]: (state, payload) => {
      return {
        ...state,
        isRunning: true
      }
    },
    [searchSucceeded]: (state, payload) => {
      return { ...state, results: payload, isRunning: false }
    },
    [searchFailed]: (state, payload) => {
      return { ...state, isRunning: false }
    }
  },
  DEFAULT_STATE
)

export default search
