export const initialsState = {
    posts: [],
    loading: false,
    error: null,
    totalPage: 0,
    page: 1,
    indexOfLastPost: 0,
    indexOfFirstPost: 0,
    postsPerPage: 2,
};


export const postsReducer = (state, action) => {

    switch(action.type){
        case "POST_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "POSTS_SUCCESS":
            return {
                ...state,
                posts: action.payload.posts,
                loading: false,
                error: null,
                totalPage: action.payload.totalItems / 2,
                indexOfLastPost: state.page * state.postsPerPage,
                indexOfFirstPost: state.indexOfLastPost - state.postsPerPage,
            };
        case "POSTS_ERROR":
            return {
                posts: [],
                loading: false,
                error: action.payload
            };
        case "POSTS_ADD":
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            };
        case "NEXT_PAGE":
            return {
                ...state,
                posts: [...action.payload, ...state.posts],
                page: state.page + 1,
                loading: false,
                indexOfLastPost: state.page * state.postsPerPage,
                indexOfFirstPost: state.indexOfLastPost - state.postsPerPage,
            };
        case "PREVIOUS_PAGE":
            return {
                ...state,
                page: state.page - 1,
                indexOfLastPost: state.page * state.postsPerPage,
                indexOfFirstPost: state.indexOfLastPost - state.postsPerPage,
            };

        default: 
            return state;
    }
}