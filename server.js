'use strict'

const net = require('net')
const Promise = require('bluebird')
const p = Promise.resolve(1)


const server = net.createServer({ allowHalfOpen: false }, sock => {
  console.log(('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort))
  sock.on('data', data => {
    // console.log('DATA ' + sock.remoteAddress + ': ' + data)
    try {
      let mes = (data.toString())
      // console.log(mes)
      // two promise
      p
        .then(data => {
          console.log('server 1')
          return 'server 2'
        })
        .then(data => console.log(data))
        .catch(err => console.error((err)))
    } catch (err) {
      console.error((err))
      return
    }
  })

  sock.on('end', () => {
    console.log(('client disconnected'))
  })
})

const PORT = 5556
const HOST = '0.0.0.0'
server.listen(PORT, HOST, () => {
  console.log(`serve on port ${HOST}:${PORT}`)
})
