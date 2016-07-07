'use strict'
const net = require('net')
require('./server.js')

let client = net.connect({ port: 5556 }, () => {
  console.log('client event')
  client.write('hello')
  client.end()
})






