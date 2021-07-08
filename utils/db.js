const lowdb = require('lowdb')
const uuid = require('uuid').v4
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = lowdb(adapter)
db.defaults({ forms: [] }).write()

module.exports = { db, uuid }
