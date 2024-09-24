import React from "react";
import { useDispatch } from "react-redux";
import { addList } from "../redux/actions";

function AddList() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");

  const handleAddList = () => {
    dispatch(addList(title));
    setTitle("");
  };

  return (
    <div className="add-list">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter list title..."
      />
      <button onClick={handleAddList}>Add list</button>
    </div>
  );
}

export default AddList;
