$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var devoured = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          console.log("devoured burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newBurger = {
    //     name: $("#burger").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function() {
    //       console.log("created new burger to devour");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
});