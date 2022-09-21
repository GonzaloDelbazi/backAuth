const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/config");
require("dotenv").config();

class Server {
  constructor(app, port, routes) {
    this.app = app;
    this.port = port;
    this.routes = routes;
  }
  start() {
    // CORS, TODO: agregar whitelist
    this.app.use(cors());

    //Health check
    this.app.get("/", (req, res) => {
        res.json({
            status: "OK",
            date: new Date(),
        });
    });

    
    // Lectura del body
    this.app.use(express.json());

    //Base de datos
    dbConnection();
    this.app.use('/api/usuarios', this.routes);

    this.app.listen(this.port, () => {
        console.log(`Server on port: ${this.port}`);
      });
  }
}

module.exports = Server;
