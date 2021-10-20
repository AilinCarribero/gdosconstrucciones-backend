exports.busquedaEstado = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.estado WHERE id_estado='${id}'`
}