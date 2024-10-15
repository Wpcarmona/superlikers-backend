const { Router } = require('express');
const { fetchEntries } = require('../controllers/entriesController');

const router = Router();

router.post('/entries', fetchEntries);

module.exports = router;
