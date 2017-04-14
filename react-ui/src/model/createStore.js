import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function () {
    return createStore(
        rootReducer,
        applyMiddleware(
            thunk, // lets us dispatch() functions
            loggerMiddleware // neat middleware that logs actions
        )
    )
}