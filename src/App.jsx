import { useState } from "react";
// import AddCategory from "./AddCategory";
// import GifGrid from "./GifGrid";
import { AddCategory, GifGrid } from "./components"

const App = () => {
  const [categories, setCategories] = useState(["Dragon Ball", "One Punch"]);

  const handleAddCategory = (newCategory) => {
    const lowerCategories = categories.map((cat) => cat.toLowerCase());
    const lowerNewCategory = newCategory.toLowerCase();
    if (lowerCategories.includes(lowerNewCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory {...{ handleAddCategory }} />


      {categories.map((category) => {
        return <GifGrid key={category} {...{ category }} />
      })}
    
    </>
  );
};

export default App;
