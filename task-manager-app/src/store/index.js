import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { tasks } from "./tasks"
import { lists } from "./lists"
import { dashboard } from "./dashboardReducer"

const rootReducer = combineReducers({
    dashboard,
    tasks,
    lists,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))