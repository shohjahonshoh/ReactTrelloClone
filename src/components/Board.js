import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import AddList from "./AddList";

function Board() {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="board">
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <AddList />
    </div>
  );
}

export default Board;
