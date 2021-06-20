
import { combineReducers } from 'redux'
import { maintenanceAdvancedReducer } from './maintenanceAdvancedReducer'
import { maintenanceBasicReducer } from './maintenanceBasicReducer'
import { modelReducer } from './modelReducer'

export const rootReducers = combineReducers({
	dataModel: modelReducer,
	dataMaintenanceBasic: maintenanceBasicReducer,
	dataMaintenanceAdvanced: maintenanceAdvancedReducer
})
