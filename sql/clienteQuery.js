exports.busquedaIdCliente = (id) => {
    return `SELECT * FROM gdosconstrucciones.cliente WHERE id_cliente='${id}'`
}