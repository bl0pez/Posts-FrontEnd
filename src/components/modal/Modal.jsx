import React from "react";
import { Button } from "../button/Button";

import "./modal.css";

export const Modal = ({ children, title, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="h-screen w-screen fixed  bg-black/75 left-0 top-0 flex justify-center items-center">
          <div className="bg-white w-96 relative rounded shadow-xl">
            <header className="border-b-2 border-violet-900 text-left">
              <h3 className="text-violet-900 text-2xl m-4">{title}</h3>
            </header>
            <div className="p-4">{children}</div>
            <footer className="p-4 text-right space-x-2">
              <button className="px-4 py-1 rounded text-red-600 transition-color hover:bg-red-300">
                Cancelar
              </button>
              <button className="px-4 py-1 rounded text-white bg-violet-900 transition-color hover:bg-violet-900-300">
                Confirmar
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
