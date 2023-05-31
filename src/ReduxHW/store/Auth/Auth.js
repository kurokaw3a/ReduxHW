const intinalState = {
    email: '',
    isAuth: false
}
export const authActionsTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    RESET: "RESET"
}

export const Auth = (state = intinalState, action) => {
    switch (action.type) {
        case authActionsTypes.LOGIN:
            console.log(state);
            return {
                ...state,
                email: action.payload,
                isAuth: true,
            }
        case authActionsTypes.LOGOUT:
            return {
                ...state,
                email: "",
                isAuth: false
            }


        default:
            return state
    }
}