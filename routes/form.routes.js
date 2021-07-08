const express = require('express')

const { db, uuid } = require('../utils/db')

const router = express.Router()

router.get('/', async (req, res) => {
  const forms = db.get('forms').value()
  return res.status(200).json({ data: forms })
})

router.post('/', async (req, res) => {
  const { label } = req.body
  const form = { id: uuid(), date: Date.now(), name: label }
  db.get('forms')
    .push(form)
    .write()
  return res.status(200).json({ ...form })
})

router.delete('/', async (req, res) => {
  db.get('forms')
    .remove({ id: req.body.id })
    .write()
  return res.status(200).json({ message: 'Successfully Deleted the Form' })
})

module.exports = router
