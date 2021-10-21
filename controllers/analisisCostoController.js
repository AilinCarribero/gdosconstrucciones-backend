const { json } = require('body-parser');
const bd = require('../pool');
const sql = require('../sql/analisisCostoQuery');
const sqlDAC = require('../sql/detalleACQuery');

//listar todos los analisis de costos disponibles
exports.listAnalisisCosto = async (req, res) => {
    try {
        bd.query(sql.selectAnalisisCosto() , async (err, response) => {
            if(err){
                //console.log('Error analisis: '+ err);
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

exports.listACDetalles = async (req, res) => {
    try {
        bd.query(sqlDAC.selectDetalleAC , async (err, response) => {
            if(err){
                //console.log('Error detalle analisis costo: '+ err);
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