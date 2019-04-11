const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const model = require('../model/modelModel.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// Logger MW:
server.use(function(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

  next();
});

// Endpoints
server.get('/', async (req, res) => {
  res.status(200).json({ message: 'Welcome to Web Testing IV!' })
});

// Non-Existant Route MW:
server.use(function(req, res) {
  res.status(404).send("Turn back, route not found.");
});


module.exports = server;
