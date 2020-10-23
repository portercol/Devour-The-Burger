// Create button 'on click' for the Devour button
$('#submitBurger').on('click', function (event) {
    // Prevent the default action of page reloading
    event.preventDefault();

    // For adding a burger - set the name to the value of the input
    // Store in a variable
    let addBurger = {
        burger_name: $('#addBurger').val().trim()
    }

    // Send Ajax post request - set the data to the add burger 
    $.ajax('/api/burgers', {
        method: 'POST',
        data: addBurger
    }).then(function () {
        location.reload();
    })

});

$('.devourBurger').on('click', function () {
    // Storing ID value and devoured value in variables
    const id = $(this).data('id');
    const devoured = 1;
    console.log(id);
    // Storing the property of 'devoured' to the variable which is === 1 in a variable
    let devourBurger = {
        devoured: devoured
    }

    // Send Ajax put request to update the data 
    $.ajax("/api/burgers/" + id, {
        method: 'PUT',
        data: devourBurger
    }).then(function () {
        location.reload();
    })
});