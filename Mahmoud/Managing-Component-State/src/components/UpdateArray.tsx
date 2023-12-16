import { useState } from "react";

const UpdateArray = () => {
  const [tags, setTags] = useState(["a", "b"]);
  const handleClick = () => {
    // Adding
    setTags([...tags, "c"]);

    // Removing
    setTags(tags.filter((tag) => tag !== "a"));

    // Updating
    setTags(tags.map((tag) => (tag === "a" ? "A" : tag)));
  };

  return (
    <>
      {tags}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateArray;
