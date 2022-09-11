import { createContext } from "react";
import { usePosts } from "../hooks/usePosts";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

  const { statePosts, nextPage } = usePosts();

  const addNewPost = (post) => {

  }

  const deletePost = (id) => {

  }

  const updatePost = (updatePost) => {

  }

  const getPost = (id) => {

  }



  return (
    <PostsContext.Provider
      value={{
        statePosts,
        nextPage,
        addNewPost,
        updatePost,
        deletePost,
        getPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
