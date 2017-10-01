import React from 'react';
import {connect} from 'react-redux';

import {guess, newGame} from '../actions';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export class Game extends React.Component {

    newGame() {
      this.props.dispatch(newGame());
    }

    guess(userGuess) {
        userGuess = parseInt(userGuess, 10);
        if (isNaN(userGuess)) {
            this.props.dispatch(guess('Please enter a valid number'));
            return;
        }

        const difference = Math.abs(userGuess - this.props.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

      this.props.dispatch(guess(feedback, userGuess));
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);
