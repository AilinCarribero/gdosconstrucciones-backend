const bd = require('../../pool');
const sql = require('../sql/proyectosQuery');
const sqlUnidadNegocio = require('../sql/unidadNegocioQuery');
const sqlCentroCosto = require('../sql/centroCostoQuery');
const sqlCliente = require('../sql/clienteQuery');

//listar todos los formas de pago disponibles
exports.listProyectos = async (req, res) => {
    try {
        bd.query(sql.listProyectos(), async (err, response) => {
            if(err){
                //console.log('Error proyecto: '+ err);
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

//Insertar un proyecto nuevo
exports.insertProyecto = async (req, res) => {
    /*buscar: 
        -unidad de negocio
        -centro de costo
        -cliente
        -armar con esos 3 el id
    */
    console.log(req.body);
    try {
        bd.query(sqlCentroCosto.busquedaIdCentroCosto(req.body.id_centro_costo), async (err, response) => {
            if(err) {
                //console.log('Error centro costos: ' + err)
                res.json(err);
            }
            if(response) {
                req.centroCosto = await response[0].siglas_cc;

                //buscamos la unidad de negocio
                bd.query(sqlUnidadNegocio.busquedaIdUnidadNegocio(req.body.id_unidad_negocio), async (err, response) => {
                    if(err) {
                        //console.log('Error en unidad de negocio: '+ err);
                        res.json(err);
                    }
                    if(response){
                        //console.log(response)
                        req.unidadNegocio = await response[0].siglas_uc;
        
                        //buscamos el cliente
                        bd.query(sqlCliente.busquedaIdCliente(req.body.id_cliente), async (err, response) => {
                            if(err) {
                                //console.log('Error en cliente: '+ err);
                                res.json(err);
                            }
                            if(response){
                                req.nombreCliente = await response[0].nombre_cliente;
                
                                //console.log(req.centroCosto);
                                //console.log(req.unidadNegocio);
                                //console.log(req.nombreCliente);
                                if(req.centroCosto && req.unidadNegocio && req.nombreCliente){
                                    req.body.id_proyecto = req.centroCosto +'-'+ req.unidadNegocio +'-'+ req.nombreCliente; //armamos el id del proyecto
                                 
                                    //insertamos en la base de datos la informacion
                                    bd.query(sql.insertProyecto(req.body), async (err, response) => {
                                        if(err) {
                                            console.log('Error al insertar proyecto: '+ err);
                                            res.json(err);
                                        }
                                        if(response) {
                                            res.json(response);
                                        }
                                        res.end();
                                    })
                                } else {
                                    //console.log('Error, hay un elemento vacio');
                                    res.json('error, un elemento esta vacio');
                                }
                            }
                        })
                    }
                })
            }
        })
    } catch (error) {
        return res.json(error);
    }

}