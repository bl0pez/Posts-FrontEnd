import { createContext } from "react";
import { postCreate } from "../helpers";
import { useGetPosts } from "../hooks/useGetPosts";


const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

    const {state, dispatch} = useGetPosts();

    const createPost = async(data) => {
        const { post } = await postCreate(data);
        dispatch({type: 'POSTS_ADD', payload: post});
    }

    return(
        <PostsContext.Provider 
            value={{
                posts: state,
                createPost
            }}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContext;