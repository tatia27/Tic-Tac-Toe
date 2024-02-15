const initial_state = {
  marks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  player: 1,
  gameOver: false,
  win: null,
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SET_PLAYER":
      return { ...state, player: action.payload };
    case "SET_MARKS":
      return { ...state, marks: action.payload };
    case "SET_GAMEOVER":
      return { ...state, gameOver: action.payload };
    case "SET_WINNER":
      return { ...state, win: action.payload };
    default:
      return state;
  }
};

export default reducer;
