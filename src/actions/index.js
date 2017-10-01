export const GUESS = 'GUESS';
export const guess = (feedback, guess) => ({
  type: GUESS,
  feedback,
  guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});

export const TOGGLE_INFOMODAL = 'TOGGLE_INFOMODAL';
export const toggleInfoModal = (showInfoModal) => ({
  type: TOGGLE_INFOMODAL,
  showInfoModal
});
