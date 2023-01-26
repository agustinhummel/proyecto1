import { combineReducers } from "redux";
import dataReducer from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice';
import paginationReducer from '../slices/paginationSlice';

const rootReducer = combineReducers({
  data: dataReducer,
  pagination: paginationReducer,
  ui: uiReducer,
});

export default rootReducer;