import { useContext } from "react";
import { Input } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { useForm } from "../../../hooks/useForm";

export const CreatePost = ({ isOpen, setIsOpen }) => {
  const { addpost, createPost } = useContext(PostsContext);
  const { loading, error } = createPost;
  const { title, content, image, handleInputChange, resetForm, loadImgRef, isFormValid } = useForm({
    title: "",
    content: "",
    image: null,
  });

  const handleSumit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);


    addpost(formData);

    if (loading && !error) {
      resetForm();
      setIsOpen(false);
      return;
    }

    return;

  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form onSubmit={handleSumit}>
      {
        error && <p className="text-red-500">{error}</p>
      }
      <Input
        name="title"
        type="text"
        value={title}
        onInputChange={handleInputChange}
      />
      <Input
        name="image"
        type="file"
        onInputChange={handleInputChange}
      />
      {
        image && (
          <div className="h-20 w-20 mb-4">
            <img
              className="h-full w-full object-cover"
              ref={loadImgRef}
              alt="preview" />
          </div>
        )
      }


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
          onClick={handleModal}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`${(isFormValid && !loading) ? "px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300" : " bg-slate-300 px-4 py-1 rounded text-white cursor-not-allowed"}`}
          disabled={!isFormValid && !loading}
        >
          Crear
        </button>
      </footer>
    </form>
  )
}
