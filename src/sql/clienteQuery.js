exports.busquedaIdCliente = (id) => {
    return `SELECT * FROM cliente WHERE id_cliente='${id}'`
}

exports.selectCliente = () => {
    return `SELECT * FROM cliente`
}