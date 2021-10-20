exports.busquedaIdCentroCosto = (id) => {
    return `SELECT * FROM gdosconstrucciones.centro_costo WHERE id_centro_costo='${id}'`
}