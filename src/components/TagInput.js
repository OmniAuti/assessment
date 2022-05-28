import { useState } from "react";

const TagInput = ({ handleCreateTag,handleTagSubmission, data }) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    const data = e.target.value;
    setInputVal(data);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    handleCreateTag(inputVal);
    setInputVal("");
    handleTagSubmission(inputVal, data.id)
  };



  return (
    <form onSubmit={(e) => handleTagSubmit(e)}>
      <input id={data.id}
        className="tag-input"
        placeholder="Add a tag"
        value={inputVal}
        onChange={(e) => handleChange(e)}
        type="text"
      />
    </form>
  );
};

export default TagInput;
