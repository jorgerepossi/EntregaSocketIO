const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;

    // middleware
    this.middleware();

    // routes
    this.routes();
  }

  middleware() {
    // Directorio publico
    this.app.use(express.static("public"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("estamos en el index");
    });
  }

  listen() {
    const server = this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
    server.on("error", (err) => console.error(err));
  }
}

module.exports = Server;
