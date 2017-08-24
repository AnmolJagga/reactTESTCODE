import { combineReducers } from 'redux'
import productListReducer from './productListReducer'
import basketListReducer from './basketListReducer'

const reducers = combineReducers({
  productListReducer,
  basketListReducer
})

export default reducers