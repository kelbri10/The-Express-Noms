const connection = require('connection.js'); 
const { connect } = require('./connection');
const consoleTable = require('console.table'); 

//methods to retrive and store data in my database 
const orm = { 

    selectAll = function () { 
        //select all sweets in database 
        //SELECT * FROM sweets
        let query = `SELECT * FROM sweets`; 
        connection.query(query, (err, result) => { 
            if (err) throw err; 

            return result; 
        })
    }, 

    insertOne = function () { 
        //insert new sweet into database 
        
    }, 

    updateOne = function() { 
        //update devoured boolean for sweets from false to true 

    }
}

module.exports = orm; 