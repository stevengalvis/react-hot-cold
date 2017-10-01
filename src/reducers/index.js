import {GUESS, NEW_GAME, TOGGLE_INFOMODAL} from '../actions';

const DEFAULT_STATE = {
  guesses: [],
  feedback: 'Make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false

};

const newGame = (state, action) => {
  return Object.assign({}, state, DEFAULT_STATE);
}

const guess = (state, action) => {
  if (action.guess && action.feedback) {

    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: action.feedback
    });
  }
  return Object.assign({}, state, {
    feedback: action.feedback
  });
}

const toggleInfoModal = (state, action) => {
  return Object.assign({}, state, {
    showInfoModal: action.showInfoModal
  });
}

export const rootReducer = (state= DEFAULT_STATE, action) => {
  switch(action.type) {
    case NEW_GAME:
      return newGame(state, action);
    case GUESS:
      return guess(state, action);
    case TOGGLE_INFOMODAL:
      return toggleInfoModal(state, action);
    default:
      return state;
  }
}

export default rootReducer;
