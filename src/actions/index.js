export const GUESS = 'GUESS';
export const guess = (guess, feedback) => ({
  type: GUESS,
  guess,
  feedback
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});
