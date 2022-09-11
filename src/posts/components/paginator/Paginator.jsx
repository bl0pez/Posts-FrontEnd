export const Paginator = () => {
  return (
    <>
      <div className="text-center space-x-3">
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-l-md"
          onClick={() => {}}
        >
          Prev
        </button>
        <button
          type="button"
          className="border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-violet-900 px-4 py-2 rounded-r-md"
          onClick={() => {}}
        >
          Next
        </button>
      </div>
    </>
  );
};
