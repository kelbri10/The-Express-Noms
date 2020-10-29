const orm = require('../config/orm'); 
//create code to call specific function 

const sweet = { 
    all: (cb) => { 
        orm.all('sweets', (res) => { 
            cb(res); 
        }); 
    }, 

    create: (cols, vals, cb) => { 
        orm.create('sweets', cols, vals, (res) => {
            cb(res); 
        })
    }, 

    update: (objColVals, condition, cb) => {
        orm.update('sweets', objColVals, condition, (res) => { 
            cb(res); 
        })
    }
}

module.exports = sweet; 