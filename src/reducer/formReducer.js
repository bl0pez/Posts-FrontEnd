export const INITIAL_STATE = {
    title: "",
    image: null,
    content: "",
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.files ? action.payload.files : action.payload.value,
            }
        case "SET_IMAGE":
            return {
                ...state,
                image: action.payload
            }
        case "RESET_FORM":
            return INITIAL_STATE
        default:
            return state
    }
}