const express = require('express'); 
const sweet = require('../models/sweets'); 
const router = express.Router(); 

//create the router for the app

//get request
router.get('/', (req, res) => { 
    sweet.all( (data) => { 
        const hbsObject = { sweets: data }; 

        console.log(hbsObject); 
        res.render('index', hbsObject); 
    })
}); 

//post request 
router.post('/api/sweets', (req, res) => { 
    sweet.create(['dessert_name', 'devoured'], [req.body.dessert_name, req.body.devoured], (result) => { 
        res.json({ id: result.insertId }); 
    })
})

//put request by id
router.put('/api/sweets/:id', (req,res) => { 
    const condition = `id = ${req.params.id}`;  

    sweet.update({ devoured: req.body.devoured }, condition, (result) => { 
        if (result.changedRows == 0) { 
            return res.status(404).end(); 
        } else { 
            res.status(200).end(); 
        }
    }); 
}); 

//export router 
module.exports = router; 