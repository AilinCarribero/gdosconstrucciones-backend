exports.busquedaIdCentroCosto = (id) => {
    return `SELECT * FROM centro_costo WHERE id_centro_costo='${id}'`
}