const express = require('express');
const router = express.Router();

const { insertEgreso, listEgresos } = require('../controllers/egresosController');
const { verifyToken } = require('../middlewares/authVerify');

router.post('/insert', verifyToken, insertEgreso);
router.get('/list', verifyToken, listEgresos);

module.exports = router;