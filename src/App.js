import React, { Component } from 'react';
import Square from './Square';
import './w3.css';
import './App.css';

const containerStyle = {
  maxWidth: '512px'
};

class App extends Component {
  state = {
    board: [
      'w3-grey',
      'w3-grey',
      'w3-grey',
      'w3-grey',
      'w3-grey',
      'w3-grey',
      'w3-grey',
      'w3-grey',
      'w3-grey'
    ],
    turn: 'w3-green'
  };

  playerWon = () => {
    const board = this.state.board;
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      // Check if Someone has won
      if (
        board[a] !== 'w3-grey' &&
        board[a] === board[b] &&
        board[b] === board[c]
      ) {
        return `${board[a].split('-')[1]} Won`;
      }
    }
    // Check if the board is full
    let isBoardFull = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 'w3-grey') {
        isBoardFull = false;
        break;
      }
    }
    if (!isBoardFull) {
      return '';
    } else {
      return 'Its a tie';
    }
  };

  updateBoard = i => {
    let board = this.state.board.slice();
    let turn = this.state.turn;
    if (board[i] === 'w3-grey') {
      board[i] = turn;
      turn = turn === 'w3-green' ? 'w3-red' : 'w3-green';
    }
    this.setState({
      board,
      turn
    });
  };

  render() {
    return (
      <div
        className="w3-container w3-content w3-padding-64"
        style={containerStyle}
      >
        <div className="w3-card w3-center w3-white w3-round w3-padding-large">
          <h3>Tic Tac Toe</h3>
          <h4>{this.playerWon()}</h4>
          <div className="w3-row">
            <Square
              value={this.state.board[0]}
              handleClick={() => {
                this.updateBoard(0);
              }}
            />
            <Square
              value={this.state.board[1]}
              handleClick={() => {
                this.updateBoard(1);
              }}
            />
            <Square
              value={this.state.board[2]}
              handleClick={() => {
                this.updateBoard(2);
              }}
            />
          </div>
          <div className="w3-row">
            <Square
              value={this.state.board[3]}
              handleClick={() => {
                this.updateBoard(3);
              }}
            />
            <Square
              value={this.state.board[4]}
              handleClick={() => {
                this.updateBoard(4);
              }}
            />
            <Square
              value={this.state.board[5]}
              handleClick={() => {
                this.updateBoard(5);
              }}
            />
          </div>
          <div className="w3-row">
            <Square
              value={this.state.board[6]}
              handleClick={() => {
                this.updateBoard(6);
              }}
            />
            <Square
              value={this.state.board[7]}
              handleClick={() => {
                this.updateBoard(7);
              }}
            />
            <Square
              value={this.state.board[8]}
              handleClick={() => {
                this.updateBoard(8);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
