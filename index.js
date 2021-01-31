import { Server } from 'boardgame.io/server';
import TicTacToe from './src/tic-tac-toe/game';
import Chess from './src/chess/game';
import serve from "koa-static";
import path from "path";

const PORT = process.env.PORT || 8000;
const server = Server({ games: [TicTacToe, Chess] });

const publicPath = path.resolve(__dirname, "./public");
server.app.use(serve(publicPath));

server.run(PORT, () => {
  console.log(`Serving at: http://localhost:${PORT}/`);
});
