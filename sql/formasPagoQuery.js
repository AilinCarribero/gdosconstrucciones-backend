exports.busquedaIdFormaPago = (id) => {
    return `SELECT * FROM heroku_aeed661c917f2ad.forma_pago WHERE id_forma_pago='${id}'`
}

exports.busquedaFormaPago = (forma_pago) => {
    return `SELECT id_forma_pago FROM heroku_aeed661c917f2ad.forma_pago WHERE forma_pago='${forma_pago}'`
}

exports.listFormaPago = () => {
    return `SELECT * FROM heroku_aeed661c917f2ad.forma_pago`
}