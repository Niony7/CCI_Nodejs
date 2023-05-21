let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestiondesapprenti'
});

connection.connect((err, success) => {
    if (err) throw err;
    console.log("conection  a la basse de donne reucu");

});

module.exports = connection;