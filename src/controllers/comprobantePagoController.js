const bd = require('../../pool');
const sql = require('../sql/comprobantePagoQuery');

//listar todos los formas de pago disponibles
exports.listComprobantePago = async (req, res) => {
    try {
        bd.query(sql.selectComprobantePago(), async (err, response) => {
            if(err){
                //console.log('Error comprobante pago: '+ err);
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