const connection = require('connection.js'); 
const { connect } = require('./connection');
const consoleTable = require('console.table'); 

//methods to retrive and store data in my database 
const orm = { 

    all: (tableInput, cb) => { 
        let query = `SELECT * FROM ??`; 

        connection.query(query, [tableInput], (err, result) => { 
            if (err) throw err; 

            cb(result); 
        })
    },

    create: (table, cols, vals, cb) => { 
        let query  = `INSERT INTO ()
                    VALUES ()`
        
        connection.query(query, (err, result) => {
            if (err) throw err; 

            cb(result); 
        })
    }, 

    update: (table, obj, condition, cb) => {
        let query = `UPDATE 
                    SET 
                    WHERE `
        connection.query(query, (err, result) => {
            if(err) throw err; 

            cb(result); 
        });
    }
}

module.exports = orm; 