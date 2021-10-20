exports.busquedaEstado = (id) => {
    return `SELECT * FROM gdoscostrucciones.estado WHERE id_estado='${id}'`
}