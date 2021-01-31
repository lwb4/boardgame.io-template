import React from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import ChessGame from './game';
import ChessBoard from './board';

const { protocol, hostname, port } = window.location.hostname;
const App = Client({
  game: ChessGame,
  board: ChessBoard,
  multiplayer: SocketIO({ server: `${protocol}://${hostname}:${port}` }),
  debug: true,
});

const Multiplayer = (playerID) => () => (
  <div style={{ padding: 50 }}>
    <App matchID="multi" playerID={playerID} />
    PlayerID: {playerID}
  </div>
);

export default Multiplayer;
