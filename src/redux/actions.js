export const addList = (title) => ({
  type: "ADD_LIST",
  payload: title,
});

export const addCard = (listId, cardText) => ({
  type: "ADD_CARD",
  payload: { listId, cardText },
});

export const deleteList = (listId) => ({
  type: "DELETE_LIST",
  payload: listId,
});

export const editCard = (listId, cardId, newText) => ({
  type: "EDIT_CARD",
  payload: { listId, cardId, newText },
});

export const deleteCard = (listId, cardId) => ({
  type: "DELETE_CARD",
  payload: { listId, cardId },
});
