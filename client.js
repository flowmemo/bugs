'use strict'
const net = require('net')
const PORT = 5556
const HOST = '0.0.0.0'
const server = net.createServer(sock => console.log('server event'))
server.listen(PORT, HOST)

const client = net.connect({ port: 5556 }, () => {
  console.log('client event')
  client.write('hello')
  client.end()
})
setTimeout(() => process.exit(), 100)






