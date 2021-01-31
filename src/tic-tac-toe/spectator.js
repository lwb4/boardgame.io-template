import React from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import TicTacToe from './game';
import Board from './board';

const App = Client({
  game: TicTacToe,
  board: Board,
  debug: false,
  multiplayer: SocketIO({ server: "/" }),
});

const Spectator = () => (
  <div>
    <h1>Spectator</h1>
    <div className="runner">
      <div className="run">
        <App matchID="spectator" playerID="0" />
        &lt;App playerID=&quot;0&quot;/&gt;
      </div>
      <div className="run">
        <App matchID="spectator" playerID="1" />
        &lt;App playerID=&quot;1&quot;/&gt;
      </div>
      <div className="run">
        <App matchID="spectator" />
        Spectator
      </div>
    </div>
  </div>
);

export default Spectator;
