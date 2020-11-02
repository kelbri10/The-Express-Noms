//imports npm packages, js files 
const express = require ('express'); 
const router  = require('./controllers/sweets_controller'); 
const exphbs = require('express-handlebars');  

const app = express(); 
const PORT = process.env.PORT || 3000; 

//middleware 
app.use(express.static('public')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

//set handlebars 
app.engine('handlebars', exphbs({ defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');

//uses routes created in controller.js 
app.use(router); 

//when app is accessed, console.log 
app.listen(PORT, () => { 
    console.log(`App is listening on PORT${PORT}`); 
}); 