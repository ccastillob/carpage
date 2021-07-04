// Importamos nuestro combineReducers
import { combineReducers } from 'redux'

// Importamos cada uno de nuestro reducers
import { discountReducer } from './discountReducer'
import { maintenanceAdvancedReducer } from './maintenanceAdvancedReducer'
import { maintenanceBasicReducer } from './maintenanceBasicReducer'
import { modelReducer } from './modelReducer'

// Exportamos cada reducer para que se muestre en las herramientas de desarrollo Redux
export const rootReducers = combineReducers({
	dataModel: modelReducer,
	dataMaintenanceBasic: maintenanceBasicReducer,
	dataMaintenanceAdvanced: maintenanceAdvancedReducer,
	dataDiscount: discountReducer
})
