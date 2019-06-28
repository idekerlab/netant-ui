import { all, call, put, takeLatest } from 'redux-saga/effects'

import {
  SEARCH_STARTED,
  SEARCH_FAILED,
  SEARCH_SUCCEEDED
} from '../actions/search'

export default function* rootSaga() {
  yield takeLatest(SEARCH_STARTED, watchSearch)
}

/**
 * Calls Cytoscape Search service and set state
 *
 * @param action
 * @returns {IterableIterator<*>}
 */
function* watchSearch(action) {
  try {
    yield put({
      results: ['OK']
    })
  } catch (e) {
    console.warn('* Search error:', e)
    yield put({
      message: 'NetAnt search error',
      error: e.message
    })
  }
}
