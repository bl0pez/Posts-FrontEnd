import React, { useContext, useReducer } from "react";
import { Loader } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { Paginator } from "../paginator/Paginator";
import { Post } from "./Post";

export const PostsList = () => {
  const { posts: data } = useContext(PostsContext);

  const { posts, loading, error } = data;

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
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
    </>
  );
};
