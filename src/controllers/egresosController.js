const bd = require('../../pool');
const sql = require('../sql/egresosQuery');

//Agregar egreso
exports.insertEgreso = async (req, res) => {
    const datos = !req.body.length ? [req.body] : req.body;;

    try {
        //Inserta el nuevo egreso
        datos.forEach(dato => {
            console.log('hola 1')
            if (!dato.fecha_diferido_pago) {
                dato.fecha_diferido_pago = '0-0-0';
            }
            console.log('hola 1.1')
            if (!dato.cuota) {
                dato.cuota = 0;
            }
            console.log('hola 1.2')
            if (!dato.cuotaNumero) {
                dato.cuotaNumero = 0;
            }
            console.log('hola 1.3')
            if (!dato.observaciones) {
                dato.observaciones = '';
            }
            console.log('hola 1.4')
            if (!dato.id_detalle_ac) {
                dato.id_detalle_ac = 0;
            }
            console.log('hola 1.5')
            bd.query(sql.insertEgreso(dato), async (err, response) => {
                console.log('hola query')
                console.log(datos)
                if (err) {
                    err.statusText = "Error";
                    err.status = 400;

                    res.json(err);
                    console.log(err)
                }
                if (response) {
                    response.statusText = "Ok";
                    response.status = 200;

                    res.json(response);
                }
            })
        });
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
