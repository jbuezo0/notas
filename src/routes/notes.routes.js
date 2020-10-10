const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const { renderAddNote, addNote, renderLinks1, renderNote, deleteNote, editNote, renderEditNote } = require('../controllers/notes.controller')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/add', renderAddNote);
router.post('/add', addNote);
router.get('/', isLoggedIn, renderNote);
// router.get('/list1', isLoggedIn, renderLinks1);
router.get('/list1', isLoggedIn, renderLinks1, );
router.get('/delete/:id', deleteNote);
router.get('/edit/:id', renderEditNote);
router.post('/edit/:id', editNote);

module.exports = router;