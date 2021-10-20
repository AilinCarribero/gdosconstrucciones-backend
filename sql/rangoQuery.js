exports.busquedaRango = (id) => {
    return `SELECT * FROM gdoscostrucciones.rango WHERE id_rango='${id}'`
}