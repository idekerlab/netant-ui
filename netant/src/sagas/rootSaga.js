import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as ncbiApi from '../api/ncbi'

import {
  SEARCH_STARTED,
  SEARCH_FAILED,
  SEARCH_SUCCEEDED
} from '../actions/search'

import {
  FETCH_PUB_STARTED,
  FETCH_PUB_FAILED,
  FETCH_PUB_SUCCEEDED
} from '../actions/publication'

export default function* rootSaga() {
  yield takeLatest(SEARCH_STARTED, watchSearch)
  yield takeLatest(FETCH_PUB_STARTED, watchFetchPublication)
}

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

function* watchFetchPublication(action) {
  const pubmedId = action.payload

  console.log('* Fetching details of PMID: ' + pubmedId)

  const article = yield call(ncbiApi.fetchPublicationSummary, pubmedId)
  console.log('* result: ', article)

  try {
    yield put({
      type: FETCH_PUB_SUCCEEDED,
      summary: article
    })
  } catch (e) {
    console.warn('NCBI error:', e)
    yield put({
      type: FETCH_PUB_FAILED,
      message: 'NCBI eFetch error',
      error: e.message
    })
  }
}

const extractPubData = article => {}
