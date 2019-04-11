const express = require('express');
const cors = require('cors');

// const model = require('../model/modelModel.js');

const server = express();

server.use(express.json());
server.use(cors());


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});


module.exports = server;
