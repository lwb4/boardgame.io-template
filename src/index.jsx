import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from "boardgame.io/react";
import { SocketIO, Local } from "boardgame.io/multiplayer";
import TicTacToe from "./Game";
import { TicTacToeBoard } from "./Board";

const { protocol, hostname, port } = window.location;
const server = `${protocol}//${hostname}:${port}`;

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server }),
});

ReactDOM.render(<App />, document.getElementById('app'));