const bd = require('../../pool');
const sql = require('../sql/clienteQuery');

//listar todos los formas de pago disponibles
exports.listClientes = async (req, res) => {
    try {
        bd.query(sql.selectCliente(), async (err, response) => {
            if(err){
                res.json(err);
            }
            if(response){
                res.json(response);
            }
            res.end();
        })
    } catch (error) {
        return res.json(error);
    }  
}