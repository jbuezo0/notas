const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth'); 

const { renderAddQuick, addQuick, renderQuick, renderQuick1, deleteQuick, renderEditQuick, editQuick } = require('../controllers/quick.controller')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/add', renderAddQuick);
router.post('/add', addQuick);
router.get('/', isLoggedIn, renderQuick);
router.get('/profile', isLoggedIn, renderQuick1);
router.get('/delete/:id', deleteQuick);
router.get('/edit/:id', renderEditQuick);
router.post('/edit/:id', editQuick);

module.exports = router;