const mysql = require('mysql'); 

if (process.env.JAWSDB_URL){ 
    let connection = mysql.createConnection(process.env.JAWSDB_URL); 
}else{ 
    let connection  = mysql.createConnection({ 
        host: 'localhost', 
        port: 3306, 
        user: 'root', 
        password: '', 
        database: 'sweets_db', 
        insecureAuth: true
    }); 
}; 

connection.connect(); 

module.exports  = connection; 