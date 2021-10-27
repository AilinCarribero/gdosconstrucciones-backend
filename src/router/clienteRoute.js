const express = require('express');
const router = express.Router();

const { listClientes } = require('../controllers/clienteController');
const { verifyToken } = require('../middlewares/authVerify');

router.get('/', verifyToken, listClientes);

module.exports = router;