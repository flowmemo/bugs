'use strict'
// import test from 'ava'
const net = require('net')
const Promise = require('bluebird')
require('./server.js')


var a = {
  messageid: 1,
  time: '123343242',
  content: {
    foo: 'bar',
    text: 'gitjlffas lsjl fjlsdjafljljfrji orjioj82'
  }
}

let client = net.connect({ port: 5556 }, () => {
  console.log('connected to server!')
  // console.log(testcase.obj.method)
  client.write(JSON.stringify(a))
  client.end()
  console.log('client connect end')
})

// test(async t => {
// setTimeout(async t => {
  var p1 = Promise.resolve('client 0')
  p1.then(() => console.log('client 1'))
  .then(() => console.log('client 2'))
// }, 0)

// test(t => t.pass())





