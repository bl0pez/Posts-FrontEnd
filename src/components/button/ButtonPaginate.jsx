export const ButtonPaginate = ({prev, action, name}) => {
  return (
    <>
    <button
    type="button"
    className={`border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 
    ${prev ? 'rounded-l-md' : 'rounded-r-md'}`}
    onClick={action}
  >
    {name}
  </button>
  </>
  )
}
