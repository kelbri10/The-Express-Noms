const express = require('express'); 
const sweets = require('../models/sweets'); 
const router = express.Router(); 

//create the router for the app

//get request
router.get('/', (req, res) => { 
    res.redirect('/sweets'); 
}); 

router.get('/sweets', (req,res)=>{ 
    sweets.selectAll(function(sweets) { 
        res.render('index', {sweets: sweets}); 
    }); 
})

//post request 
router.get('/sweets/create', (req,res) => { 
    sweets.insertOne('/'); 
})

//put request by id
router.put('/sweets/:id', (req,res) => { 
    sweets.updateOne(req.params.id, function (result) { 
        res.sendStatus(200); 
    }); 
}); 

//export router 
module.exports = router; 