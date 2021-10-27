exports.insertIngreso = (datos) => {
    return `INSERT INTO ingreso(id_proyecto, fecha_cobro, fecha_diferido_cobro, id_forma_cobro, id_user, valor_cobro, observaciones, cuotas, cuota) 
    VALUES (
        '${datos.id_proyecto}',
        '${datos.fecha_cobro}',
        '${datos.fecha_diferido_cobro}',
        '${datos.id_forma_cobro}',
        '${datos.id_user}',
        '${datos.valor_cobro}',
        '${datos.observaciones}',
        '${datos.cuota}',
        '${datos.cuotaNumero}'
        )`
}

exports.listIngresos = () => {
    return `SELECT ingreso.id_ingreso, ingreso.id_proyecto, ingreso.fecha_cobro, ingreso.fecha_diferido_cobro, 
    forma_cobro.forma_cobro, user.nombre_apellido, ingreso.valor_cobro, ingreso.observaciones
    FROM ((ingreso AS ingreso 
    INNER JOIN forma_cobro AS forma_cobro ON ingreso.id_forma_cobro=forma_cobro.id_forma_cobro)
    INNER JOIN usuario AS user ON ingreso.id_user=user.id_user)
    `
}