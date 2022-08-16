import React, { useState } from "react";

export const AddCategory = ({ handleAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanInputValue = inputValue.trim();
    if (cleanInputValue.length <= 1) return;
    handleAddCategory(cleanInputValue);
    setInputValue("");
    e.target.children[0].focus ()
    inputValue
  };

  const handleReset = () => {
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Agregar</button>
        <button type="reset" onClick={handleReset}>
          Resetear
        </button>
      </form>
    </>
  );
};

