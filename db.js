const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    port : 3306,
    database : 'model'
});

connection.connect()

connection.query('SELECT * FROM customer', (err, results, fields) => {
    if (err){
        console.log(err);
    }
    console.log(results);
});

connection.end()