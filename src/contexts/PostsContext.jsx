import { createContext } from "react";
import { usePosts } from "../hooks/usePosts";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { posts, totalItems, loading, post, createPost, postEdit, pagination, nextPosts, prevPosts, addpost } = usePosts();

  return (
    <PostsContext.Provider
      value={{
        posts,
        totalItems,
        loading,
        pagination,
        createPost,
        postEdit,
        nextPosts,
        addpost,
        prevPosts,
        post,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
