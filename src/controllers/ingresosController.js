const bd = require('../../pool');
const sql = require('../sql/ingresosQuery');

//Agregar ingreso
exports.insertIngreso = async (req, res) => {
    const dato = req.body;
    
    if (!dato.fecha_diferido_cobro) {
        dato.fecha_diferido_cobro = dato.fecha_cobro;
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

    try {
        //Inserta el nuevo ingreso
        bd.query(sql.insertIngreso(dato), async (err, response) => {
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