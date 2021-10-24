import { combineReducers } from "redux";
// import counter from "./counter";
import myTodoText from "./MyTodoText";

const createRootReducers = () =>
  combineReducers({
    myTodoText,
  });

export default createRootReducers