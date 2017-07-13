



$(document).ready(function(){
  $("form#pizzaSelections").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    // var userResponses = [];
    var warningSignsCounter = 0;
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningSignsCounter += 1;
      if (warningSignsCounter === 3) {
        return $('#warning-responses').append("you seem stressed. Call doctor feelgood!");
      } else {
        return $('#warning-responses').append("you are feeling fine!");
      }
      // var warningSigns = $(this).val();
      // $('#warning-responses').append(warningSigns + "<br>");
        // userResponses.push(workTransportationMode);
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
    console.log(userResponses);
    $('#stress-survey').hide();
  });
});
