const initialState = {
  lists: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: Date.now(), title: action.payload, cards: [] },
        ],
      };
    case "ADD_CARD":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: [
                  ...list.cards,
                  {
                    id: Date.now(),
                    text: action.payload.cardText,
                    isEditing: false,
                  }, // isEditing ni qo'shish
                ],
              }
            : list
        ),
      };
    case "EDIT_CARD":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.map((card) =>
                  card.id === action.payload.cardId
                    ? {
                        ...card,
                        text: action.payload.newText,
                        isEditing: false,
                      }
                    : card
                ),
              }
            : list
        ),
      };
    case "DELETE_CARD":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.filter(
                  (card) => card.id !== action.payload.cardId
                ),
              }
            : list
        ),
      };
    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case "TOGGLE_EDIT_CARD":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.map((card) =>
                  card.id === action.payload.cardId
                    ? { ...card, isEditing: !card.isEditing }
                    : card
                ),
              }
            : list
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
