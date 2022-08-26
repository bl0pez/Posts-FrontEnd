export const initialsStatePost = {
    post: null,
    loading: false,
    error: null,
};


export const postReducer = (state, action) => {
    switch(action.type){
        case "POST_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "POST_SUCCESS":
            return {
                ...state,
                post: action.payload,
                loading: false,
            };
        case "POST_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default: 
            return state;
    }
}