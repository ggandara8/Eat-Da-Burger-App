$(function(){
    $("#devoured-btn").on("click", function(event){
        var id = $(this).data("id");
        var dev = $(this).data("devoured"); 

        var devouredEvent = {
            devoured: dev
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredEvent
          }).then(
            function() {
              console.log("Success");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });
});

$(function(){
  $("#submit-btn").on("click", function(event){
    var newBurger = {
      burger_name: $("#newBurger").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});