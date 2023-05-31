const initialState = {
    result: 0
}

export const calculatorActionsType = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    MULTILPLY: "MULTILPLY",
    RESET: "RESET",
    DIVIDE: "DIVIDE",

}
export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case calculatorActionsType.ADD:


            return {
                ...state,
                result: state.result + 5,
            }
        case calculatorActionsType.SUBTRACT:

            return {
                ...state,
                result: state.result - 3
            }
        case calculatorActionsType.MULTILPLY:
            return {
                ...state,
                result: state.result * 5
            }
        case calculatorActionsType.RESET:
            return {
                ...state,
                result: 0
            }

        case calculatorActionsType.DIVIDE:
            return {
                ...state,
                result: state.result / 2
            }


        default: return state
    }

}
