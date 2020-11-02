const mysql = require('mysql');  
let connection; 

if (process.env.JAWSDB_URL){ 
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
    
}else{ 
    connection  = mysql.createConnection({ 
        host: 'localhost', 
        port: 3306, 
        user: 'root', 
        password: '', 
        database: 'sweets_db'
    }); 
    
   
}; 
  
// Export connection for orm.js to use.
connection.connect(function(err) {
    if (err) throw err; 
    console.log('You are now connected');
});

module.exports = connection; 