const { Router } = require('express');
const { postCreateSession } = require('../controllers/sessionController');

const router = Router();

// Ruta para crear una sesión
router.post('/session', postCreateSession);

module.exports = router;
