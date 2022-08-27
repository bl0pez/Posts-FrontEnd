export const initialsState = {
    posts: [],
    loading: false,
    error: null,
    totalPage: 0,
    page: 1,
    indexOfLastPost: 0,
    indexOfFirstPost: 0,
    postsPerPage: 2,
    totalItems: 0,
    post: {},
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
                indexOfLastPost: state.postsPerPage,
                totalItems: action.payload.totalItems,
            };
        case "POSTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "POSTS_ADD":
            return {
                ...state,
                posts: [...state.posts, action.payload],
                loading: false,
                totalItems: state.totalItems + 1,
            };
        case "POSTS_DELETE":
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload),
                totalItems: state.totalItems - 1,
                loading: false,
            };
        case "POST_GET":{
            return {
                ...state,
                post: state.posts.filter(post => post._id === action.payload),
                loading: false,
            }
        }
        case "NEXT_PAGE":
            return {
                ...state,
                posts: state.posts.length > state.indexOfLastPost ? state.posts : [...state.posts, ...action.payload],
                page: state.page + 1,
                loading: false,
                indexOfLastPost: state.indexOfLastPost + state.postsPerPage,
                indexOfFirstPost: state.indexOfFirstPost + state.postsPerPage,
            };
        case "PREVIOUS_PAGE":
            return {
                ...state,
                loading: false,
                page: state.page - 1,
                indexOfLastPost: state.indexOfLastPost - state.postsPerPage,
                indexOfFirstPost: state.indexOfFirstPost - state.postsPerPage,
            };

        default: 
            return state;
    }
}