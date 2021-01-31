import React from 'react';
import { Lobby } from 'boardgame.io/react';
import { default as BoardTicTacToe } from '../tic-tac-toe/board';
import { default as BoardChess } from '../chess/board';
import { default as GameTicTacToe } from '../tic-tac-toe/game';
import { default as GameChess } from '../chess/game';
import './lobby.css';

GameTicTacToe.minPlayers = 1;
GameTicTacToe.maxPlayers = 2;
GameChess.minPlayers = GameChess.maxPlayers = 2;

const importedGames = [
  { game: GameTicTacToe, board: BoardTicTacToe },
  { game: GameChess, board: BoardChess },
];

const LobbyView = () => (
  <div style={{ padding: 50 }}>
    <h1>Lobby</h1>

    <Lobby
      gameServer={"/"}
      lobbyServer={"/"}
      gameComponents={importedGames}
    />
  </div>
);

export default LobbyView;
