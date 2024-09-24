import React from "react";
import { useDispatch } from "react-redux";
import { addCard, deleteList } from "../redux/actions";
import Card from "./Card";

function List({ list }) {
  const dispatch = useDispatch();
  const [cardText, setCardText] = React.useState("");

  const handleAddCard = () => {
    if (cardText.trim()) {
      dispatch(addCard(list.id, cardText));
      setCardText("");
    }
  };

  return (
    <div className="list">
      <h3>{list.title}</h3>
      {list.cards.map((card) => (
        <Card key={card.id} text={card.text} />
      ))}
      <input
        type="text"
        value={cardText}
        onChange={(e) => setCardText(e.target.value)}
        placeholder="Enter the text for this card..."
      />
      <button onClick={handleAddCard}>Add card</button>
      <button onClick={() => dispatch(deleteList(list.id))}>Delete list</button>
    </div>
  );
}

export default List;
