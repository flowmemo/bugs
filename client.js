'use strict'
const net = require('net')
const PORT = 5556
const HOST = '0.0.0.0'

const server = net.createServer(() => console.log('server event'))
server.listen(PORT, HOST)

net.connect({ port: PORT }, () => console.log('client event'))

setTimeout(() => process.exit(), 100)
