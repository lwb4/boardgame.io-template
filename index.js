import { Server, SocketIO } from "boardgame.io/server";
import TicTacToe from "./src/Game";
import serve from "koa-static";
import path from "path";

const server = Server({
  games: [TicTacToe]
});

const publicPath = path.resolve(__dirname, "./public");
server.app.use(serve(publicPath));

server.run(8000);