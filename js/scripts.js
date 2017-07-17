//Business Logic

function pizzaOrder(toppings, size) {
  this.size = size;
  this.toppings = toppings;
}

pizzaOrder.prototype.price = function() {
  var price = 0;
  if (this.size === "8") {
    this.price = 10;
  } else if (this.size === "10") {
    this.price = 12;
  } else if (this.size === "12") {
    this.price = 14;
  } else {
    this.price = 16;
  }

//User Interface Logic

$(document).ready(function(){
  $("form#pizzaSelections").submit(function(event){
    event.preventDefault();
    var size = $(select#pizzaSize).val();
    var toppings = $("input:checkbox[name=toppings]:checked").length;
    var
//     $("#pizzaResult").show();
//
//     var toppingsCounter = 0
//     $("input:checkbox[name=toppings]:checked").each(function(){
//       toppingsCounter += 1;
//       if (toppingsCounter !== 3) {
//         return $('#pizzaResult').append("Congratulations you won a free pizza");
//       } else {
//         return $('#pizzaResult').append("3 toppings, your pizza is 10USD");
//       }
//     });
