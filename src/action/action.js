export const setMarks = (marks) => ({
  type: "SET_MARKS",
  payload: marks,
});

export const setPlayer = (player) => ({
  type: "SET_PLAYER",
  payload: player,
});

export const setGameOver = (status) => ({
  type: "SET_GAMEOVER",
  payload: status,
});

export const setWinner = (win) => ({
  type: "SET_WINNER",
  payload: win,
});
