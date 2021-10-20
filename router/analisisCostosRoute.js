const express = require('express');
const router = express.Router();

const { listAnalisisCosto, listACDetalles } = require('../controllers/analisisCostoController');
const { verifyToken } = require('../middlewares/authVerify');

router.get('/', verifyToken, listAnalisisCosto);
router.get('/detalles', verifyToken, listACDetalles);

module.exports = router;