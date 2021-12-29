import tasksReducer from './tasks';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
