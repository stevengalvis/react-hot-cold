import {GUESS, NEW_GAME} from '../actions';

const DEFAULT_STATE = {
  guesses: [],
  feedback: 'Make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

const newGame = (state, action) => {
  return Object.create({}, state, DEFAULT_STATE);
}

const guess = (state, action) => {
  return Object.create({}, state, {
    guesses: [...state.guesses, action.guess]
  });
}

export const rootReducer = (state= DEFAULT_STATE, action) => {
  switch(action.type) {
    case NEW_GAME:
      return newGame(state, action);
    case GUESS:
      return guess(state, action);
    default:
      return state;
  }
}

export default rootReducer;
