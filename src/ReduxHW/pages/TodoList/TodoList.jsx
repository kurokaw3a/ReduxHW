import React from 'react';
import Todo from './Todo';
import TodoItems from './TodoItems';
import { useDispatch, useSelector } from 'react-redux';
import { TodoListActionsType } from '../../store/TODO/TodoList';

const TodoList = () => {

    const state = useSelector((state) => state.todo)
    console.log(state);
    const dispatch = useDispatch()



    const removeTodo = (id) => {
        dispatch({ type: TodoListActionsType.REMOVE, payload: id })
    }
    const checkTodo = (id) => {
        dispatch({ type: TodoListActionsType.CHECK, payload: id })
    }
    return (

        <>
            <Todo />
            {state.todo.map((el) => {
                return <TodoItems checkTodo={checkTodo} el={el} state={state} remove={removeTodo} />
            }
            )}

        </>
    );
};

export default TodoList;