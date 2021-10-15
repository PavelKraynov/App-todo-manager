import { combineReducers } from "redux";
// import counter from "./counter";
import myCounters from "./counters2"

const createRootReducers = () =>
  combineReducers({
    myCounters,
  });

export default createRootReducers