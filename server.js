const express = requires('express'); 
const app = express(); 
const PORT = 3000; 

app.listen(PORT, () => { 
    console.log(`App is listening on PORT${PORT}`); 
}); 