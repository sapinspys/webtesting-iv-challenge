const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Router Imports:
const authRouter = require("../auth/auth-router.js");

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

server.use("/api/auth", authRouter);

// Non-Existant Route MW:
server.use(function(req, res) {
  res.status(404).send("Turn back, route not found.");
});


module.exports = server;
