import { combineReducers } from "redux";
// import counter from "./counter";
import myTodoText from "./MyTodoText";
import myDoingText from "./MyDoingText"
import myDoneText from "./MyDoneText"

const createRootReducers = () =>
  combineReducers({
    myTodoText,
    myDoingText,
    myDoneText
  });

export default createRootReducers