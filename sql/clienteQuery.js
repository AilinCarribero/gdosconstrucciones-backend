exports.busquedaIdCliente = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.cliente WHERE id_cliente='${id}'`
}