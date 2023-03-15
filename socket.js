'use strict';

const { io } = require('socket.io-client');

// FOR LOCAL DEPLOY
const socket = io('http://localhost:4000/');

// DEPLOYED SOCKET SERVER
// const socket = io('https://team-socket-server-dev.onrender.com');

module.exports = { socket };