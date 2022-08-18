export const initialsState = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
    previosPage: 0,
    totalPerPage: 2,
    totalPosts: 0,
};


export const postsReducer = (state, action) => {
    switch(action.type){
        case "POST_LOADING":
            return {
                posts:  [],
                loading: true,
                error: null
            };
        case "POSTS_SUCCESS":
            return {
                posts: action.payload,
                loading: false,
                error: null,
                totalPosts: state.posts.length,
            };
        case "POSTS_ERROR":
            return {
                posts: [],
                loading: false,
                error: action.payload
            };
        case "POSTS_ADD":
            return {
                posts: [...state.posts, action.payload],
                loading: false,
                error: null,
                totalPosts: [state.totalPosts + 1],
            };
        case "Next_PAGE":
            return {
                ...state,
                page: state.page + 1,
            };
        case "PREVIOUS_PAGE":
            return {
                ...state,
                page: state.page - 1,
            };

        default: 
            return state;
    }
}