

const todos = {
    todo: []
}

export const TodoListActionsType = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    CHECK: "CHECK",
    RESET: "RESET"
}

export const TodoList = (state = todos, action) => {

    switch (action.type) {
        case TodoListActionsType.ADD:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case TodoListActionsType.REMOVE:
            return {
                ...state,
                todo: state.todo.filter(el => el.id !== action.payload)
            }
        case TodoListActionsType.CHECK:
            return {
                ...state,
                todo: state.todo.map(el => {
                    if (el.id !== action.payload) {
                        return el
                    }
                    return {
                        ...el,
                        isChecked: !el.isChecked
                    }
                })
            }
        case TodoListActionsType.RESET:
            return {
                ...state,
                todo: []

            }
        default:
            return state
    }




};
