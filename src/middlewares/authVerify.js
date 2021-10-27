const jwt = require('jsonwebtoken');
const promisify = require('util.promisify/implementation');

//Base de datos
const bd = require('../../pool');
const sqlUser = require('../sql/authQuery');
const sqlRango = require('../sql/rangoQuery');

exports.verifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers["authorization"];
        //console.log(authorization)

        if(!authorization || !authorization.toLowerCase().startsWith('bearer')) {
            return res.status(403).json({message: "No existe el token"});
        } else {
            const token = authorization.substring(7);

            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            const user = await bd.query(sqlUser.busquedaIdUser(decoded.id)); //Si esto no funciona crear una busqueda que solo devuelva el id
            req.userId = user[0].id_user;
            req.userRango = user[0].id_rango;

            //console.log('userId: ' + req.userId + ' - rango: ' + req.userRango);

            if(!user){
                return res.status(404).json({message: "No existe el usuario"});
            }

            next();
        }
    } catch (error) {
        return res.status(405).json({message: error});
    }
}

exports.verifyAdmin = async (req, res, next) => {
    //console.log(req.userId);
    //console.log(req.userRango);
    const userRango = await bd.query(sqlRango.busquedaRango(req.userRango));

    if(userRango == 'admin') {
        next()
    } else {
        return res.status(410).json({message: "No posee los permisos necesarios"})
    }

}

exports.verifyMedio = async (req, res, next) => {

}