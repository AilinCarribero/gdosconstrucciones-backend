const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST || 'us-cdbr-east-04.cleardb.com',//process.env.HOST,
    database: process.env.DB_NAME || 'heroku_aeed661c917f2ad',//process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER || 'bae7330e749d8b',//process.env.DB_USER,
    password: process.env.DB_PASSWORD || 'd1eedbfb',//process.env.DB_PASSWORD,
    waitForConnections: true,
    debug: false
})

//mysql://bae7330e749d8b:d1eedbfb@us-cdbr-east-04.cleardb.com/heroku_aeed661c917f2ad?reconnect=true

connection.connect(err => {
    if(err){
        //console.log('Error de conexion con la bd: ' + err);
        throw err;
    } else {
        //console.log('Conexion con la BD exitosa: '+ process.env.DB_NAME);
       // connection.release();
    }
    return;
})

connection.query = util.promisify(connection.query);

module.exports = connection;