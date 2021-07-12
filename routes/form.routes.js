const express = require('express')

const { db, uuid } = require('../utils/db')

const router = express.Router()

router.get('/', async (req, res) => {
  const forms = db.get('forms').map(({ components, ...data }) => data)
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

router.get('/:formid', async (req, res) => {
  const { formid } = req.params
  const data = db
    .get('forms')
    .find({ id: formid })
    .value()
  return res.status(200).json({ id: formid, components: data.components })
})

router.put('/', async (req, res) => {
  const { id, components } = req.body
  db.get('forms')
    .find({ id })
    .assign({ components })
    .write()
  res.status(200).json({ message: 'Successfully edited the form' })
})

router.delete('/', async (req, res) => {
  db.get('forms')
    .remove({ id: req.body.id })
    .write()
  return res.status(200).json({ message: 'Successfully Deleted the Form' })
})

router.post('/submit', async (req, res) => {
  const { body } = req
  db.get('data')
    .push(body)
    .write()
  return res.status(200).json({ message: 'Successfully Submitted the form' })
})

module.exports = router
