
export const initialState = {
    currentPage: 1,
    postsPerPage: 2,
    totalPosts: 0
}

export const paginationReducer = (state = {}, action) => {
    switch (action.type) {
        case "TOTAL_POSTS":
            return {
                ...state,
                totalPosts: action.payload
            }
        case "NEXT_PAGE":
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case "PREVIOUS_PAGE":
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        
        default:
            return state;

    }
}