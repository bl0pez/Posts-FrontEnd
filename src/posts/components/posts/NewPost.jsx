import { useContext, useReducer, useState } from "react";
import { Modal } from "../../../components";
import PostsContext from "../../../contexts/PostsContext";
import { formReducer, INITIAL_STATE } from "../../../reducer/formReducer";

export const NewPost = () => {


  
  const { createPost } = useContext(PostsContext);
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {

    const { name, value, files } = e.target;
    dispatch({
      type:"CHANGE_INPUT",
      payload: {
        name,
        value,
        files,
      }
    })

    if(state.title.length > 5 && state.image !== null && state.content.length > 5){
      console.log("entro");
      setFormSubmitted(true);
    }

  }

  console.log(state);

  const handleSumit = (e) => {
    e.preventDefault();

    console.log('click');
    if (!formSubmitted) return;

    createPost(state);
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
          <div className="text-left flex flex-col gap-2 mb-4">
            <label htmlFor="title" className="text-lg uppercase">
              Title:
            </label>
            <input
              className="input"
              type="text"
              name="title"
              value={state.title}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              value={state.content}
              onChange={handleInputChange}
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
