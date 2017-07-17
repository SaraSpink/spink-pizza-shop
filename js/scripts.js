//Business Logic

function pizzaOrder(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

pizzaOrder.prototype.toppings = function() {
  $(function())
}



//User Interface Logic
$(document).ready(function(){
  $("form#pizzaSelections").submit(function(event){
    event.preventDefault();
    $("#pizzaResult").show();

    var toppingsCounter = 0
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppingsCounter += 1;
      if (toppingsCounter !== 3) {
        return $('#pizzaResult').append("Congratulations you won a free pizza");
      } else {
        return $('#pizzaResult').append("3 toppings, your pizza is 10USD");
      }
    });

    $("#health-responses").show();
    $("input:checkbox[name=health-symptons]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-responses').append(healthSymptoms + "<br>");
      // userResponses.push(funTransportationMode);
    });

    $("#coping-responses").show();
    $("input:checkbox[name=coping]:checked").each(function(){
      var coping = $(this).val();
      $('#coping-responses').append(coping + "<br>");
    });
    // var userResponses = [];
    // $("input:checkbox[name=work-transportation]:checked").each(function(){
    //   var workTransportationMode = $(this).val();
    //   userResponses.push(workTransportationMode);
    // // });
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   userResponses.push(funTransportationMode);
    // });
    console.log(toppingsCounter);
    $('#pizzaSelections').hide();
  });
});
