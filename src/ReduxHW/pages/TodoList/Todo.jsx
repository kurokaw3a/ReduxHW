import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoListActionsType } from '../../store/TODO/TodoList';

const Todo = () => {


    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const resetTodo = () => {
        dispatch({ type: TodoListActionsType.RESET })
    }

    const addTodo = (event) => {
        event.preventDefault()
        if (inputValue.trim() !== '') {
            const data = {
                value: inputValue,
                id: Math.random(),
                isChecked: false,
            }
            dispatch({ type: TodoListActionsType.ADD, payload: data })
        }
        setInputValue('')
    }

    const getVal = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <form onSubmit={addTodo}>
            <input value={inputValue} onChange={getVal} type="text" />
            <button>add</button>
            <button onClick={resetTodo}>reset</button>
        </form>
    );
};

export default Todo;