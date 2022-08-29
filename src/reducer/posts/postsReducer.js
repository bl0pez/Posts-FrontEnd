export const initialsState = {
    posts: {
        data: [],
        loading: false,
        error: null
    },
    post: {
        data: null,
        loading: false,
        error: null
    },
    pagination: {
        totalPage: 0,
        indexOfLastPost: 0,
        indexOfFirstPost: 0,
        totalItems: 0,
        postsPerPage: 2,
        page: 1,
    }
};


export const postsReducer = (state, action) => {
    switch(action.type){
        case "POSTS_LOADING":
            return {
                ...state,
                posts: {
                    ...state,
                    loading: true,
                }
            };
        case "POSTS_SUCCESS":
            return {
                ...state,
                posts: {
                    data: action.payload.posts,
                    loading: false,
                    error: null,
                },
                pagination: {
                    ...state.pagination,
                    totalItems: action.payload.totalItems,
                    totalPage: action.payload.totalItems / 2,
                    indexOfLastPost: state.pagination.postsPerPage,
                }
            };
        case "POSTS_ERROR":
            return {
                ...state,
                posts: {
                    data: [],
                    loading: false,
                    error: action.payload,
                },
            };
        case "POST_LOADING":
            return {
                ...state,
                post: {
                    ...state.post,
                    loading: true,
                }
            };
        case "POST_ADD":
            return {
                ...state,
                post:{
                    data: action.payload,
                    loading: false,
                    error: null,
                },
                posts: {
                    ...state.posts,
                    data: [...state.posts.data, state.post.data],
                    loading: false,
                },
                pagination: {
                    ...state.pagination,
                    totalItems: state.pagination.totalItems + 1,
                }
            };
        case "POST_ERROR":
            return {
                ...state,
                post: {
                    data: null,
                    loading: false,
                    error: action.payload,
                }
            };
        default: 
            return state;
    }
}