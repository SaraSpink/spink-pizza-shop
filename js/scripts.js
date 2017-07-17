//Business Logic

function pizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

pizzaOrder.prototype.price = function() {
  var price = 0
  if (this.size === "8") {
      price = 10 + (this.toppings);
    } else if (this.size === "10") {
      price = 12 + (this.toppings);
    } else if (this.size === "12") {
      price = 14 + (this.toppings);
    } else {
      price = 16 + (this.toppings);
    }
  }

// //User Interface Logic

$(document).ready(function() {
  $("form#pizzaSelections").submit(function(event){
    event.preventDefault();
    var size = $("#pizzaSize").val();
    var toppings = $("#pizzaSelections input:checked");
    var toppingsCount = parseInt(toppings.length);
    var userOrder = new pizzaOrder (size, toppings);
    var price = userOrder.price();

    $("#yourPrice").append("$" + price);
    $("#pizzaResult").show();
    console.log(userOrder);
    });
  });
