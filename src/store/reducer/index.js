import { combineReducers } from "redux";
import tasks from "./tasks";
import selectedTheme from './theme'
export default combineReducers({
  tasks,
  selectedTheme,
});
