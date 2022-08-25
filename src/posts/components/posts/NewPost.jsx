import { useContext, useReducer, useState } from "react";
import { Input, Modal } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { useForm } from "../../../hooks/useForm";

export const NewPost = () => {


  
  const { createPost } = useContext(PostsContext);
  const { title, content, image, formSubmitted, handleInputChange, resetForm} = useForm({
    title: "",
    content: "",
    image: null,
  });

  
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSumit = (e) => {
    e.preventDefault();
    if(!formSubmitted) return; 

    createPost({ title, content, image });
    resetForm();
    setIsOpen(false);    

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
                  src={URL.createObjectURL(image)} 
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
              className={`${formSubmitted ? "px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300" : " bg-slate-300 px-4 py-1 rounded text-white cursor-not-allowed"}`}
              disabled={!formSubmitted}
            >
              Crear
            </button>
          </footer>
        </form>
      </Modal>
    </>
  );
};
