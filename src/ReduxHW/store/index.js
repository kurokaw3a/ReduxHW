import { createStore, combineReducers } from 'redux'
import { Auth } from './Auth/Auth'
import { TodoList } from './TODO/TodoList'
import { calculatorReducer } from './Calculator/Calculator'

const rootReducer = combineReducers({
    auth: Auth,
    calculator: calculatorReducer,
    todo: TodoList,
})

export const store = createStore(rootReducer)