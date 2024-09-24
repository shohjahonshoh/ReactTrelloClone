import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard, updateCard } from "../features/boardSlice";
import { FaTrashAlt, FaSave, FaEdit } from "react-icons/fa";

function Card({ listId, card }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [editedText, setEditedText] = useState(card.text); 

  const handleDelete = () => {
    dispatch(deleteCard({ listId, cardId: card.id }));
  };


  const handleEdit = () => {
    setIsEditing(true);
  };

 
  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      dispatch(updateCard({ listId, cardId: card.id, newText: editedText }));
      setIsEditing(false); 
  };

  return (
    <div className="card">
      {}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus 
        />
      ) : (
        <p>{card.text}</p>
      )}

      {/* Show save button if editing, otherwise show edit and delete icons */}
      {isEditing ? (
        <FaSave
          onClick={handleSaveEdit}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
      ) : (
        <>
          <FaEdit
            onClick={handleEdit}
            style={{ cursor: "pointer", marginRight: "10px" }}
          />
          <FaTrashAlt onClick={handleDelete} style={{ cursor: "pointer" }} />
        </>
      )}
    </div>
  );
}

export default Card;
