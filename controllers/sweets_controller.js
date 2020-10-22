const express = require('express'); 
const sweets = require('../models/sweets'); 
const router = express.Router(); 

//create the router for the app

//get request
router.get('/', (req, res) => { 
    res.send('Hello World'); 
})
//post request 
router.post('/api/sweets', (req,res)=>{ 

})
//get dessert by id
router.put('/api/snacks/:id', (req,res) => { 

})
//export router 
module.exports = router; 