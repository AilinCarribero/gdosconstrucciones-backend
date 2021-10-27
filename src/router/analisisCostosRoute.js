const express = require('express');
const router = express.Router();

const { listAnalisisCosto, listACDetalles } = require('../controllers/analisisCostoController');
const { verifyToken } = require('../middlewares/authVerify');

router.get('/detalles', verifyToken, listACDetalles);
router.get('/', verifyToken, listAnalisisCosto);

module.exports = router;