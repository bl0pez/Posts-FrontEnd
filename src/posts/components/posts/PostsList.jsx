import React, { useContext, useReducer } from "react";
import { Loader } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { Paginator } from "../paginator/Paginator";
import { Post } from "./Post";

export const PostsList = () => {
  const { posts, pagination, loading} = useContext(PostsContext);

  const { indexOfFirstPost, indexOfLastPost, postsPerPage, totalItems } = pagination;


  const { data, error } = posts;

  if (!loading) {
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
        {posts.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
          <Post key={post._id} {...post} />
        )) }

        {
          totalItems > postsPerPage && <Paginator />
        }

    </>
  );
};
