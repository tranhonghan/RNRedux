import {combineReducers} from 'redux'
import numberReducer from '../reducers/numberReducer'

const allReducers = combineReducers({
    numberReducer: numberReducer
    // listReducer: listReducer
})

export default allReducers