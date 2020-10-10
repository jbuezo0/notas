const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const { renderAddContact, addContact, renderContact, deleteContact, renderEditContact, editContact } = require('../controllers/contacts.controller')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/add', renderAddContact);
router.post('/add', addContact);
router.get('/', isLoggedIn, renderContact);
router.get('/delete/:id', deleteContact);
router.get('/edit/:id', renderEditContact);
router.post('/edit/:id', editContact);

module.exports = router;