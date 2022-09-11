import { useState } from "react";
import { Loader } from "../../../components/loader/Loader";
import { useContextPosts } from "../../../hooks/useContextPosts";
import { Paginator } from "../paginator/Paginator";
import { Post } from "./Post";

export const PostsList = () => {

  const { statePosts, nextPage } = useContextPosts();
  const { posts, loading, error, page } = statePosts;

  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [indexOfLastPost, setIndexOfLastPost] = useState(2);

  const onNextPage = () => {
    nextPage();
    setIndexOfFirstPost(indexOfFirstPost + 2);
    setIndexOfLastPost(indexOfLastPost + 2);
  }

  const onPreviousPage = () => {
    setIndexOfFirstPost(indexOfFirstPost - 2);
    setIndexOfLastPost(indexOfLastPost - 2);
  }

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

      <div className="text-center space-x-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-l-md"
          onClick={onPreviousPage}
        >
          Prev
        </button>
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-r-md"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>

    </>
  )
}
