import { createStore, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducers from './reducers'
// import { createBrowserHistory } from 'history'
import { middleware } from "./middleware";

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose

const composedEnchanters = composeFunc(middleware)
// const history = createBrowserHistory()
const store = createStore(createRootReducers(), initialState, composedEnchanters)

export default store