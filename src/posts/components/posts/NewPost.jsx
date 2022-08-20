import { useContext, useState } from "react";
import { Input, Modal } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { useForm } from "../../../hooks/useForm";

const formData = {
  title: "",
  content: "",
};

const formValidation = {
  title: [(value) => value.length >= 5, "title must be at least 5 characters"],
  content: [
    (value) => value.length >= 5,
    "Content must be at least 5 characters",
  ],
};

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const { createPost } = useContext(PostsContext);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleSumit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    createPost({ title, image, content });
    setIsOpen(false);

    if (!formSubmitted) return;
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="text-violet-900 py-1 px-4 text-xl bg-amber-500 shadow-xl rounded-sm transition-colors hover:bg-amber-600"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New Post
      </button>
      <Modal title="New Post" isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSumit}>
          <div className="text-left flex flex-col gap-2 mb-4">
            <label htmlFor="title" className="text-lg uppercase">
              Title:
            </label>
            <input
              className="input"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="text-left flex flex-col gap-2 mb-4">
            <label htmlFor="image" className="text-lg uppercase">
              Image:
            </label>
            <input
              className="input"
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="text-left flex flex-col gap-2 mb-4">
            <label htmlFor="content" className="text-lg uppercase">
              Content:
            </label>
            <textarea
              className="input"
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.content)}
            ></textarea>
          </div>
          <footer className="p-4 text-right space-x-2">
            <button
              type="button"
              className="px-4 py-1 rounded text-red-600 transition-color hover:bg-red-300"
              onClick={handleModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300"
            >
              Confirmar
            </button>
          </footer>
        </form>
      </Modal>
    </>
  );
};
