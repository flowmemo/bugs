'use strict'
const net = require('net')

const PORT = 5556
const HOST = '0.0.0.0'
const server = net.createServer(sock => console.log('server event'))

server.listen(PORT, HOST)
