$(function() {

    $('.change-state').on('click', (event) => {
        const id = $('.btn').data('id'); 

        const newStatus = $('.btn').data('newDevoured');
        const newDevouredState = { devoured: newStatus }; 
        
        console.log(id); 
        console.log(newStatus); 
        console.log(JSON.stringify(newDevouredState)); 
        //PUT request 
        //$.ajax('/api/sweets/' + id, {
            //type: 'PUT', 
           // data: newDevouredState
      //  }).then( () => { 
     
        //    location.reload(); 
       // });
    });

    $('.create-form').on('submit', (event) => {
        event.preventDefault(); 
        
        const newSweet = { 
            dessert_name: $('#de').val().trim()
        }; 

        //post request 
        $.ajax('/api/sweets', { 
            type: 'POST', 
            data: newSweet
        }).then(() => { 

                location.reload(); 
            });
    });
});