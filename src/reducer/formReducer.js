export const INITIAL_STATE = {
    title: "",
    image: null,
    content: "",
}

export const formReducer = (state , action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.files ?  action.payload.files[0] : action.payload.value,
            }
        case "RESET_FORM":
            return initialState
        default:
            return state
    }
}