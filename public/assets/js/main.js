$(function() {

    $('.change-state').on('click', (event) => {

        
    })

    $('.create-form').on('submit', (event) => {
        event.preventDefault(); 

        let newSweet = { 
            name: $('#de').val().trim()
        }; 

        //post request 
        $.ajax('/api/sweets', { 
            type: 'POST', 
            data: newSweet
        }).then(() => { 

                location.reload(); 
            }
        );
    });
})