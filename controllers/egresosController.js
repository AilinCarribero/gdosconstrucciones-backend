const bd = require('../pool');
const sql = require('../sql/egresosQuery');
const sqlUser = require('../sql/authQuery');
const sqlAnalisisCosto = require('../sql/analisisCostoQuery');
const sqlFormaPago = require('../sql/formasPagoQuery');

//Agregar egreso
exports.insertEgreso = async (req, res) => {
    const dato = req.body;
    
    if (!dato.fecha_diferido_pago) {
        dato.fecha_diferido_pago = dato.fecha_pago;
    };
    if (!dato.cuota) {
        dato.cuota = 0;
    }
    if (!dato.cuotaNumero) {
        dato.cuotaNumero = 0;
    }
    if (!dato.observaciones) {
        dato.observaciones = '';
    }
    if(!dato.id_detalle_ac){
        dato.id_detalle_ac = 0;
    }

    try {
        //Inserta el nuevo egreso
        bd.query(sql.insertEgreso(dato), async (err, response) => {
            if (err) {
                console.log('Error egreso: ' + err);
            }
            if (response) {
                console.log('Se agrego con exito');
                res.json(response);
            }
            res.end();
        })

    } catch (error) {
        return res.json(error);
    }
}

//Listar egresos
exports.listEgresos = async (req, res) => {
    try {
        bd.query(sql.listEgresos(), (err, response) => {
            if (err) {
                console.log('Error al listar egresos: ' + err);
            }
            if (response) {
                res.json(response);
            }
            res.end();
        })
    } catch (error) {
        return res.json(error);
    }

}