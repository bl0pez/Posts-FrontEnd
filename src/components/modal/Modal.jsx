import React from "react";

export const Modal = ({ children, title, isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="h-screen w-screen fixed  bg-black/75 left-0 top-0 flex justify-center items-center">
          <div className="bg-white w-11/12 relative rounded shadow-xl">
            <header className="border-b-2 border-violet-900 text-left">
              <h3 className="text-violet-900 text-2xl m-4">{title}</h3>
            </header>
            <div className="p-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
