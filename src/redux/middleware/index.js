// import { createBrowserHistory } from 'history'
// import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// const history = createBrowserHistory()
export const middleware = applyMiddleware(thunk)