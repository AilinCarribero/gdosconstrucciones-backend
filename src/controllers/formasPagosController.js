const bd = require('../../pool');
const sql = require('../sql/formasPagoQuery');

//listar todos los formas de pago disponibles
exports.listFormasPago = async (req, res) => {
    try {
        bd.query(sql.listFormaPago(), async (err, response) => {
            if(err){
                //console.log('Error forma pago: '+ err);
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