import { createAction } from 'redux-actions'

export const FETCH_PUB_STARTED = 'FETCH_PUB_STARTED'
export const FETCH_PUB_SUCCEEDED = 'FETCH_PUB_SUCCEEDED'
export const FETCH_PUB_FAILED = 'FETCH_PUB_FAILED'


export const fetchPubStarted = createAction(FETCH_PUB_STARTED)
export const fetchPubSucceeded = createAction(FETCH_PUB_SUCCEEDED)
export const fetchPubFailed = createAction(FETCH_PUB_FAILED)

