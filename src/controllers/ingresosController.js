const bd = require('../../pool');
const sql = require('../sql/ingresosQuery');

//Agregar ingreso
exports.insertIngreso = async (req, res) => {
    const datos = !req.body.length ? [req.body] : req.body;

    try {
        //Inserta el nuevo ingreso
        datos.forEach(async dato => {
            if (!dato.fecha_diferido_cobro) {
                dato.fecha_diferido_cobro = '0-0-0';
            }
            if (!dato.cuota) {
                dato.cuota = 0;
            }
            if (!dato.cuotaNumero) {
                dato.cuotaNumero = 0;
            }
            if (!dato.observaciones) {
                dato.observaciones = '';
            }
            
            bd.query(sql.insertIngreso(dato), async (err, response) => {
                if (err) {
                    err.statusText = "Error";
                    err.status = 400;

                    res.json(err)
                } else if (response) {
                    response.statusText = "Ok";
                    response.status = 200;

                    res.json(response);
                }
            })
        })
    } catch (error) {
        return res.json(error);
    }
}

//Listar ingresos
exports.listIngresos = async (req, res) => {
    try {
        bd.query(sql.listIngresos(), (err, response) => {
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

//Listar ingresos por id de proyecto
exports.listIngresosId = async (req, res) => {
    try {
        bd.query(sql.listIngresosId(req.params.id), (err, response) => {
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