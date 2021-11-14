const bd = require('../../pool');
const sql = require('../sql/egresosQuery');

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
                res.json(err);
            }
            if (response) {
                response.statusText = "Ok";
                response.status = 200;
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
                res.json(err);
            }
            if (response) {
                response.statusText = "Ok";
                response.status = 200;
                res.json(response);
            }
            res.end();
        })
    } catch (error) {
        return res.json(error);
    }
}

//Listar egresos por id de proyecto
exports.listEgresosId = async (req, res) => {
    try {
        bd.query(sql.listEgresosId(req.params.id), (err, response) => {
            if (err) {
                res.json(err);
            }
            if (response) {
                response.statusText = "Ok";
                response.status = 200;
                res.json(response);
            }
            res.end();
        })
    } catch (error) {
        return res.json(error);
    }
}
