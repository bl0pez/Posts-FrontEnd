import React from 'react'

export const Paginator = ({ nextPage, setIndexOfFirstPost, setIndexOfLastPost, indexOfFirstPost, indexOfLastPost,
  page, totalItems, posts }) => {

  const onNextPage = () => {
    nextPage();
    setIndexOfFirstPost(indexOfFirstPost + 2);
    setIndexOfLastPost(indexOfLastPost + 2);
  }

  const onPreviousPage = () => {
    setIndexOfFirstPost(indexOfFirstPost - 2);
    setIndexOfLastPost(indexOfLastPost - 2);
  }

  //TODO: terminal pagination

  return (
    <>
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

