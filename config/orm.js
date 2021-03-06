const connection = require('../config/connection');


//helper function to generate question marks 
const printQuestionMarks = num => { 
    const arr = []; 

    for (let i = 0; i < num; i++) { 
        arr.push('?'); 
    }

    return arr.toString(); 
}

//helper function to convert object key/value pairs to SQL syntax 
const objToSql = ob => { 
    const arr = []; 

    for (let key in ob) { 
        let value = ob[key]; 

        if (Object.hasOwnProperty.call(ob, key)) { 
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = '\'' + value + '\''; 
            }

            arr.push(key + '=' + value); 
        }
    }

    return arr.toString(); 
}

//ORM object for all SQL statements 
const orm = { 

    all: (tableInput, cb) => { 
        const queryString = `SELECT * FROM ${tableInput}`; 

        connection.query(queryString, (err, result) => { 
            if (err) throw err; 

            cb(result); 
        })
    },

    create: (table, cols, vals, cb) => { 
        const queryString  = 'INSERT INTO ' + table + ' (' + cols.toString() + ') VALUES (' + printQuestionMarks(vals.length) + ') '; 
        
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err; 

            cb(result); 
        })
    }, 

    update: (table, objColVals, condition, cb) => {
        const queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition; 
        
        connection.query(queryString, (err, result) => {
            if(err) throw err; 

            cb(result); 
        });
    }
}

module.exports = orm; 