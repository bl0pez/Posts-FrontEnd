import { useState } from "react";
import { Loader } from "../../../components/loader/Loader";
import { useContextPosts } from "../../../hooks/useContextPosts";
import { Paginator } from "../paginator/Paginator";
import { Post } from "./Post";

export const PostsList = () => {

  const { statePosts, nextPage } = useContextPosts();
  const { posts, loading, error, page, totalItems } = statePosts;

  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [indexOfLastPost, setIndexOfLastPost] = useState(2);

  if (loading) {
    return (
      <div className="text-center">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-danger">{error}</p>
      </div>
    )
  }


  return (
    <>
      {

        posts.slice(indexOfFirstPost, indexOfLastPost).map(post => (
          <Post key={post._id} {...post} />
        ))

      }

      {
        totalItems > 2 &&
        (
          <Paginator
            indexOfFirstPost={indexOfFirstPost}
            indexOfLastPost={indexOfLastPost}
            setIndexOfFirstPost={setIndexOfFirstPost}
            setIndexOfLastPost={setIndexOfLastPost}
            nextPage={nextPage}
            page={page}
            totalItems={totalItems}
            posts={posts}
          />
        )
      }

    </>
  )
}
