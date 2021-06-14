
import { combineReducers } from 'redux'
import { modelReducer } from './modelReducer'

export const rootReducers = combineReducers({
	dataModel: modelReducer
})
