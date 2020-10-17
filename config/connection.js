const mysql = require('mysql'); 

const connection  = mysql.createConnection({ 
    host: 'localhost', 
    port: 3306, 
    user: 'root', 
    password: '', 
    database: 'sweets_db', 
    insecureAuth: true
}); 

module.exports  = connection; 