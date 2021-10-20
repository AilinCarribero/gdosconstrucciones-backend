const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    multipleStatements: true,
    host: 'us-cdbr-east-04.cleardb.com',//process.env.HOST,
    database: 'heroku_aeed661c917f2ad',//process.env.DB_NAME,
    //port: process.env.DB_PORT,
    user: 'bae7330e749d8b',//process.env.DB_USER,
    password: 'd1eedbfb'//process.env.DB_PASSWORD,
})

//mysql://bae7330e749d8b:d1eedbfb@us-cdbr-east-04.cleardb.com/heroku_aeed661c917f2ad?reconnect=true

connection.connect(err => {
    if(err){
        console.log('Error de conexion con la bd: ' + err);
        throw error;
    } else {
        console.log('Conexion con la BD exitosa');
       // connection.release();
    }
    return;
})

connection.query = util.promisify(connection.query);

module.exports = connection;