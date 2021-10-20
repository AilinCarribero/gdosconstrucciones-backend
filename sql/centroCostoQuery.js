exports.busquedaIdCentroCosto = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.centro_costo WHERE id_centro_costo='${id}'`
}