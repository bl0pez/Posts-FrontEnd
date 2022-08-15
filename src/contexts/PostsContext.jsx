import { createContext } from "react";
import { useGetPosts } from "../hooks/useGetPosts";


const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

    const posts = useGetPosts();

    return(
        <PostsContext.Provider value={posts}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContext;