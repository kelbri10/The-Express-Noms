const connection = require('connection.js'); 
const { connect } = require('./connection');
const consoleTable = require('console.table'); 

const selectAll = () => { 
     //select all burgers in the database
     let selectQuery = `SELECT * FROM sweets`; 

     connection.query(selectQuery, (err, result)=>{ 
         console.table(result); 
     })
}

const insertOne = () => { 
    //insert a burger into the database 
    let insertQuery = `INSERT INTO sweets (dessert_name, devoured)
                        VALUES ()`; 

    connection.query(insertQuery, (err, result)=>{ 
        console.log('Dessert has been inserted'); 
    }); 
}

const updateOne = () => { 
    //update burger in the database 
    let updateQuery = `UPDATE sweets
                        SET sweets.devoured = 
                        WHER sweets.dessert_name = `; 
    
    connection.query(updateQuery, (err, result)=>{ 
        console.log('Dessert has been updated!'); 
    });