const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const model = require('../model/modelModel.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});


module.exports = server;
