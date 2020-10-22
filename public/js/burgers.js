// Grab the form
$('#form').on('submit', function(event){
    // console.log("is it hit?");
    // Prevent the default action of page reloading
    event.preventDefault();
  
    // create a new burger
    let newBurger = {
      // set the burger name to the value the user types in
      burger_name: $('#addBurger').val().trim()
    }
    console.log(newBurger);
  
    // Send Ajax post request - set the data to the newBuger 
    $.ajax('/api/burgers', {
      method: 'POST',
      data: newBurger
    }).then(function(){
      // reloads the page after a post 
      location.reload();
    })
  
  });
  
  $('#devourBurger').on('click', function(){
    // using the data method to update data that has a 'burgerId' value
    const id = $(this).data('id');
    const devoured = $(this).data('devoured')
    console.log(id)
  
    // create a new burger
    let changeBurger = {
      // set the burger name to the value the user types in
      devoured: devoured
    }
  
    // Send Ajax put request to update the data 
    $.ajax("/:id", {
      method: 'PUT',
      data: changeBurger
    }).then(function(){
      location.reload();
    })
  
  });