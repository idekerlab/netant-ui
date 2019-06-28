import { createAction } from 'redux-actions'

export const ADD_TERMS = 'ADD_TERMS'
export const CLEAR_TERMS = 'CLEAR_TERMS'

export const SEARCH_STARTED = 'SEARCH_STARTED'
export const SEARCH_SUCCEEDED = 'SEARCH_SUCCEEDED'
export const SEARCH_FAILED = 'SEARCH_FAILED'

export const addTerms = createAction(ADD_TERMS)
export const clearTerms = createAction(CLEAR_TERMS)

export const searchStarted = createAction(SEARCH_STARTED)
export const searchSucceeded = createAction(SEARCH_SUCCEEDED)
export const searchFailed = createAction(SEARCH_FAILED)
