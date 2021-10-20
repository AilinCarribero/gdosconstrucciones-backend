exports.buscarNombre = (nombre) => {
    return `SELECT id_user FROM gdosconstrucciones.usuario WHERE nombre_apellido='${nombre}'`
}

exports.busquedaIdUser = (id) => {
    return `SELECT * FROM gdosconstrucciones.usuario WHERE id_user='${id}'`
}

exports.login = (correo) => {
    return `SELECT * 
    FROM (gdosconstrucciones.usuario AS usuario 
    INNER JOIN gdosconstrucciones.rango AS rango ON usuario.id_rango=rango.id_rango)
    WHERE correo='${correo}'`
}