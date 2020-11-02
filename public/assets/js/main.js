$(function() {

    $('.change-state').on('click', function(event) {
        const id = $(this).data('id'); 

        const newStatus = $(this).data('newdevoured');
        const newDevouredState = { devoured: newStatus }; 
        
        console.log(id); 
        console.log(newStatus); 
        console.log(JSON.stringify(newDevouredState)); 
        //PUT request 
        $.ajax('/api/sweets/' + id, {
            type: 'PUT', 
            data: newDevouredState
        }).then( () => { 
     
            location.reload(); 
        });
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