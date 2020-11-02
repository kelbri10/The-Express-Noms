const { json } = require("express");

$(function() {

    $('.change-state').on('click', (event) => {
        const id = $(this).data('id'); 

        const newDevoured = $(this).data('newdevoured')
        const newDevouredState = {devoured: newDevoured}; 
        
        //PUT request 
        $.ajax('/api/sweets/' + id, {
            type: 'PUT', 
            data: newDevouredState
        }).then( () => { 
            console.log('cahanged devoured to', newDevoured); 
            location.reload(); 
        }
        )
    })

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
                console.log('created new dessert'); 
                location.reload(); 
            });
    });
});