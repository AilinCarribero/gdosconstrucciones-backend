exports.busquedaIdAnalisisCosto = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.analisis_costo WHERE id_analisis_costo='${id}'`
}

exports.busquedaAnalisisCosto = (analisis_costo) => {
    return `SELECT id_analisis_costo FROM heroku_aeed661c917f2ad.analisis_costo WHERE analisis_costo='${analisis_costo}'`
}

exports.selectAnalisisCosto = () => {
    return `SELECT * FROM heroku_aeed661c917f2ad.analisis_costo`
}