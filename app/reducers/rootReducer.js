import gitReducer from './gitReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  gitReducer,
});

export default rootReducer;
