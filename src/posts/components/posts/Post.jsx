import { Link } from "react-router-dom";

export const Post = ({ title, author, createdAt, _id, deletePost }) => {
  return (
    <article className="border border-violet-900 rounded p-2 max-w-2xl mx-auto my-5">
      <header className="post__header">
        <h3 className="text-base text-gray-500">
          Posted by {author} on {new Date(createdAt).toLocaleDateString('en-US')}
        </h3>
        <h1 className="text-2xl my-2 text-violet-900">{title}</h1>
      </header>
      <div className="text-right space-x-4 text-xl">
        <Link 
          to={`/feed/post/${_id}`}
          className="px-4 py-1 rounded text-violet-900 transition-colors hover:bg-violet-300">
          View
        </Link>
        <button className="px-4 py-1 rounded mx-2 text-violet-900 transition-color hover:bg-violet-300">
          Edit
        </button>
        <button 
          className="px-4 py-1 rounded text-red-600 transition-color hover:bg-red-300"
          onClick={() => deletePost(_id)}
          >
          Delete
        </button>
      </div>
    </article>
  );
};
