exports.buscarNombre = (nombre) => {
    return `SELECT id_user FROM heroku_aeed661c917f2ad.usuario WHERE nombre_apellido='${nombre}'`
}

exports.busquedaIdUser = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.usuario WHERE id_user='${id}'`
}

exports.login = (correo) => {
    return `SELECT * 
    FROM (heroku_aeed661c917f2ad.usuario AS usuario 
    INNER JOIN heroku_aeed661c917f2ad.rango AS rango ON usuario.id_rango=rango.id_rango)
    WHERE correo='${correo}'`
}