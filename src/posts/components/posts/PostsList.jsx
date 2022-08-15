import React, { useContext } from "react";
import { Loader } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { Post } from "./Post";

export const PostsList = () => {
  const { posts, loading, error } = useContext(PostsContext);

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
