const { getContact, postContact, putContact, deleteContact} = require ('../controller/contactController');

const route = require('express').Router()

route.get('/',getContact)

route.post('/',postContact)

route.put('/',putContact)

route.delete('/:id',deleteContact)

module.exports = route