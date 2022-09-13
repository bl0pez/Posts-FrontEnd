import React from 'react'
import { ButtonPaginate } from '../../../components';

export const Paginator = ({ nextPage, setIndexOfFirstPost, setIndexOfLastPost, indexOfFirstPost, indexOfLastPost,
  totalItems }) => {

  const onNextPage = () => {
    nextPage();
    setIndexOfFirstPost(indexOfFirstPost + 2);
    setIndexOfLastPost(indexOfLastPost + 2);
  }

  const onPreviousPage = () => {
    setIndexOfFirstPost(indexOfFirstPost - 2);
    setIndexOfLastPost(indexOfLastPost - 2);
  }

  if (totalItems == indexOfLastPost || totalItems + 1 == indexOfLastPost) {
    return (
      <div className="text-center space-x-3">
        <ButtonPaginate
          prev={true}
          action={onPreviousPage}
          name="Prev"
        />
      </div>
    )
  }

  if (indexOfFirstPost === 0) {
    return (
      <div className="text-center space-x-3">
        <ButtonPaginate
          action={onNextPage}
          name="Next"
        />
      </div>
    )
  }

  return (
    <>
      <div className="text-center space-x-3">
        <ButtonPaginate
          prev={true}
          action={onPreviousPage}
          name="Prev"
        />
        <ButtonPaginate
          action={onNextPage}
          name="Next"
        />
      </div>
    </>
  )
}

