import { combineReducers } from 'redux'

import search from './search'
import publication from './publication'

const rootReducer = combineReducers({
  search,
  publication
})

export default rootReducer
