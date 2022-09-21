const Server = require("./src/server");
const router =  require("./src/routes/usuarios");
const express = require('express');

const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

const server = new Server(app, port, router);

server.start();

// ------------------------------------------------
