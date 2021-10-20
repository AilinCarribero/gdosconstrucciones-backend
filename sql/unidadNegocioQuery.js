exports.busquedaIdUnidadNegocio = (id) => {
    return `SELECT * FROM gdosconstrucciones.unidad_negocio WHERE id_unidad_negocio='${id}'`
}