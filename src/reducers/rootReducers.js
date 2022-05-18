import { combineReducers } from 'redux';

import { discountReducer } from './discountReducer';
import { maintenanceAdvancedReducer } from './maintenanceAdvancedReducer';
import { maintenanceBasicReducer } from './maintenanceBasicReducer';
import { maintenanceCustomServiceReducer } from './maintenanceReducer';
import { modelReducer } from './modelReducer';
import { productReducer } from './productReducer';
import { shoppingCartReducer } from './shoppingCartReducer';
import { uiReducer } from './uiReducer';

export const rootReducers = combineReducers({
  dataModel: modelReducer,
  dataMaintenanceBasic: maintenanceBasicReducer,
  dataMaintenanceAdvanced: maintenanceAdvancedReducer,
  dataDiscount: discountReducer,
  shoppingCart: shoppingCartReducer,
  currentMaintenanceServices: maintenanceCustomServiceReducer,
  currentProduct: productReducer,
  ui: uiReducer,
});
