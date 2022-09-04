import { Input } from "../../../components";
import React, { useContext, useEffect } from "react";
import PostsContext from "../../../contexts/PostsContext";
import { useForm } from "../../../hooks/useForm";

export const EditPost = ({ isOpen, setIsOpen, post }) => {
  const { postEdit, createPost } = useContext(PostsContext);

  const { loading, error } = createPost;

  const { title, image, content, handleInputChange, isFormValid, resetForm } = useForm({
    title: post.title,
    image: post.imageUrl,
    content: post.content,
  });

  const handleSubmmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    postEdit(formData, post._id);

    if(loading && !error){
      resetForm();
      setIsOpen(false);
      return;
    }

    return;

  };

  return (
    <form onSubmit={handleSubmmit}>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        name="title"
        type="text"
        value={title}
        onInputChange={handleInputChange}
      />
      <Input name="image" type="file" onInputChange={handleInputChange} />
      <div className="h-20 w-20 mb-4">
        <img
          className="h-full w-full object-cover"
          src={import.meta.env.VITE_BACKEND_URL_STATIC + image}
          alt="preview"
        />
      </div>
      <Input
        type={"textArea"}
        name="content"
        value={content}
        onInputChange={handleInputChange}
      />
      <footer className="p-4 text-right space-x-2">
        <button
          type="button"
          className="px-4 py-1 rounded text-red-600 transition-color hover:bg-red-300"
          onClick={() => setIsOpen(false)}
        >
          Cancelar
        </button>
        <button 
          type="submit"
          className={`${(isFormValid && !loading) ? "px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300" : " bg-slate-300 px-4 py-1 rounded text-white cursor-not-allowed"}`}
          disabled={!isFormValid && !loading}
          >Editar</button>
      </footer>
    </form>
  );
};
