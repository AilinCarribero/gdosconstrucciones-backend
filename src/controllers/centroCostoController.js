const bd = require('../../pool');
const sql = require('../sql/centroCostoQuery');

//listar todos los formas de pago disponibles
exports.listCentrosCostos = async (req, res) => {
    try {
        bd.query(sql.selectCentroCosto(), async (err, response) => {
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