exports.busquedaRango = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.rango WHERE id_rango='${id}'`
}