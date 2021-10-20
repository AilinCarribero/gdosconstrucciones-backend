exports.busquedaIdUnidadNegocio = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.unidad_negocio WHERE id_unidad_negocio='${id}'`
}