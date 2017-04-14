import {combineReducers} from 'redux'
import actionReducer from './reducers/actionReducer'

const rootReducer = combineReducers({
    actionReducer,
})

export default rootReducer