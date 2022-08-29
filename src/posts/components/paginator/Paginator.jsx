import { useContext } from "react";
import PostsContext from "../../../contexts/PostsContext";

export const Paginator = () => {
  const {
    pagination,
    nextPosts,
    prevPosts,
  } = useContext(PostsContext);

  const {
    postsPerPage,
    indexOfLastPost,
    indexOfFirstPost,
    totalItems,
  } = pagination;

  if (postsPerPage > indexOfFirstPost) {
    return (
      <div className="text-center space-x-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-r-md"
          onClick={() => nextPosts()}
        >
          Next
        </button>
      </div>
    );
  }

  if (indexOfLastPost >= totalItems) {
    return (
      <div className="text-center space-x-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-l-md"
          onClick={() => prevPosts()}
        >
          Prev
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center space-x-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-l-md"
          onClick={() => prevPosts()}
        >
          Prev
        </button>
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-r-md"
          onClick={() => nextPosts()}
        >
          Next
        </button>
      </div>
    </>
  );
};
