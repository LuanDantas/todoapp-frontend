import { combineReducers } from 'redux'
import todoReducer from '../to-do/todoReducer'

// Reducer que irá concatenar/combinar todos os outros
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer