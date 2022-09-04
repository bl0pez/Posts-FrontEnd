import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/loader/Loader";
import PostsContext from "../../contexts/PostsContext";
import notFound from "../img/not-found.svg";

export const Post = () => {

  const { id } = useParams();
  const { post: data, postDetail } = useContext(PostsContext);
  const { post, loading, error } = data;
  const navigate = useNavigate();

  useState(() => {
    postDetail(id);
  }, [id, postDetail]);

  if (!loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (post) {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl py-5 text-center">{post.title}</h1>

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 p-2">
            <img
              className="w-full"
              src={`${import.meta.env.VITE_BACKEND_URL_STATIC}${post.imageUrl}`}
              alt={post.title}
            />
          </div>
          <div className="lg:w-1/2 p-2">
            <p className="text-gray-600 p-2">
              Author: <span>{post.creator.name}</span>
            </p>
            <p className="text-gray-600 p-2">
              Created:{" "}
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </p>
            <p className="text-gray-600 p-2">
              Content: <span>{post.content}</span>
            </p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
              onClick={() => navigate(-1)}
              >
              Volver
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="h-24 w-24">
        <img className="w-full object-cover" src={notFound} alt="" />
        </div>
        <p>Post is not found</p>
    </div>

  );
};
