import React from 'react'

export const Input = ({ name, type, onInputChange, value }) => {
  
  return (
    <div className="text-left flex flex-col gap-2 mb-4">
    <label 
        htmlFor={name}
        className="text-lg uppercase">
        {name}:
        </label>
    <input 
        id={name} 
        type={type}
        name={name}
        value={value}
        onChange={e => onInputChange(e.target.value)}
        className={`input`}/>
    </div>
  )
}
