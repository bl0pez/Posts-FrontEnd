import { createContext } from "react";
import { getPosts, postCreate } from "../helpers";
import { useGetPosts } from "../hooks/useGetPosts";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

    const {state, dispatch} = useGetPosts();

    const createPost = async(data) => {
        dispatch({type: "POST_LOADING"});
        const { post } = await postCreate(data);
        dispatch({type: 'POSTS_ADD', payload: post});
    }

    const getPost = (id) => {
        dispatch({type: "POST_LOADING"});
        dispatch({type: "POST_GET", payload: id});
    }

    const nextPosts = async() => {
        dispatch({type: "POST_LOADING"});
        if(state.posts.length > state.indexOfLastPost) {
            dispatch({type: 'NEXT_PAGE'});
            return;
        }


        const { posts } = await getPosts(state.page + 1);
        dispatch({type: 'NEXT_PAGE', payload: posts});
    }

    const prevPosts = () => {
        dispatch({type: "POST_LOADING"});
        dispatch({type: 'PREVIOUS_PAGE'});
    }

    

    return(
        <PostsContext.Provider 
            value={{
                posts: state,
                dispatch,
                createPost,
                getPost,
                nextPosts,
                prevPosts,
            }}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContext;