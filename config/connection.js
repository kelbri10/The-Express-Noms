const mysql = require('mysql');  
let connection; 

if (process.env.JAWSDB_URL){ 
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
    
}else{ 
    connection  = mysql.createConnection({ 
        host: 'localhost', 
        port: 3306, 
        user: 'root', 
        password: 'Phoenix25', 
        database: 'sweets_db'
    }); 
    
   
}; 
  
// Export connection for orm.js to use.
connection.connect();

module.exports = connection; 