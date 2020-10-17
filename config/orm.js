const connection = require('connection.js'); 
const { connect } = require('./connection');
const consoleTable = require('console.table'); 

const selectAll = () => { 
     //select all burgers in the database
     let selectQuery = `SELECT * FROM burgers`; 

     connection.query(selectQuery, (err, result)=>{ 
         console.table(result); 
     })
}

const insertOne = () => { 
    //insert a burger into the database 
    let insertQuery = `INSERT INTO burgers (burger_name, devoured)
                        VALUES ()`; 

    connection.query(insertQuery, (err, result)=>{ 
        console.log('burger has been inserted'); 
    }); 
}

const updateOne = () => { 
    //update burger in the database 
    let updateQuery = `UPDATE burgers
                        SET burgers.devoured = 
                        WHER burgers.burger_name = `; 
    
    connection.query(updateQuery, (err, result)=>{ 
        console.log('burger has been updated!'); 
    }); 
}