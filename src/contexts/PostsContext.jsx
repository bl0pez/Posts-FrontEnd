import { createContext } from "react";


const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    return(
        <PostsContext.Provider value={[]}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContext;