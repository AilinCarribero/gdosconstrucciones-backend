const bd = require('../../pool');
const sql = require('../sql/formasCobroQuery');

//listar todos los formas de pago disponibles
exports.listFormasCobro = async (req, res) => {
    try {
        bd.query(sql.listFormaCobro(), async (err, response) => {
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