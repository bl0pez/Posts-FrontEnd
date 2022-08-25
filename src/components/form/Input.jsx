import React from "react";

export const Input = ({ name, type, onInputChange, value }) => {
  if (type === "file") {
    return (
      <div className="text-left flex flex-col gap-2 mb-4">
        <label htmlFor={name} className="text-lg uppercase">
          {name}:
        </label>
        <input
          id={name}
          type={type}
          name={name}
          onChange={onInputChange}
          className={`input`}
        />
      </div>
    );
  }

  if (type === "textArea") {
    return (
      <div className="text-left flex flex-col gap-2 mb-4">
        <label htmlFor={name} className="text-lg uppercase">
          {name}:
        </label>
        <textarea 
          className="input" 
          id={name} 
          name={name}
          value={value}
          onChange={onInputChange}
          ></textarea>
      </div>
    );
  }

  return (
    <div className="text-left flex flex-col gap-2 mb-4">
      <label htmlFor={name} className="text-lg uppercase">
        {name}:
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onInputChange}
        className={`input`}
      />
    </div>
  );
};
