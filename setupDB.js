'use strict'

const r = require('rethinkdb')
r.connect({ host: 'localhost', port: 28015 })
  .then(conn => {
    console.log('connected')
    return r.dbCreate('db635')
      .run(conn)
      .then(() => console.log('  dbCreate done'))
      .then(() => r.db('db635')
        .tableCreate('eiprotocol', {primaryKey: 'messageid'})
        .run(conn)
        .then(() => console.log('  tableCreate done'))
      )
      .then(() => console.log('setup work done'))
      .then(() => conn.close())
      .then(() => console.log('connection closed'))
      .catch((err) => { throw err })
  })
