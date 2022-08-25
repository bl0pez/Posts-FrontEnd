import React, { useContext, useReducer } from "react";
import { Loader } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { Paginator } from "../paginator/Paginator";
import { Post } from "./Post";

export const PostsList = () => {
  const { posts: data, getPost } = useContext(PostsContext);

  const { posts, loading, error, totalPage, totalItems } = data;

  if (loading) {
    return (
      <div className="text-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1>Error :(</h1>;
  }

  return (
    <>
        {posts.slice(data.indexOfFirstPost, data.indexOfLastPost).map((post) => (
          <Post key={post._id} {...post} getPost={getPost} />
        )) }

        {
          totalItems > totalPage && <Paginator />
        }

    </>
  );
};
