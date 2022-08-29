import { useState } from "react";
import { Modal } from "../../../components";
import { CreatePost } from "./CreatePost";

export const NewPost = () => {


  const [isOpen, setIsOpen] = useState(false);
  
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
        <CreatePost isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Modal>
    </>
  );
};
