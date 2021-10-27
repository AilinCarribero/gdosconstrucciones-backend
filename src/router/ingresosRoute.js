const express = require('express');
const router = express.Router();

const { insertIngreso, listIngresos } = require('../controllers/ingresosController');
const { verifyToken } = require('../middlewares/authVerify');

router.post('/insert', verifyToken, insertIngreso);
router.get('/', verifyToken, listIngresos);

module.exports = router;