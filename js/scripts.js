$(document).ready(function(){
  $("form#health-survey").submit(function(event){
    event.preventDefault();

    $("#warning-signs").show();
    var warningSigns = [];
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSignsMode = $(this).val();
      $('#warning-signs').append(warningSignsMode + "<br>");
      warningSigns.push(warningSignsMode);
    });

    $("#health-symptoms").show();
    var healthSymptoms = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptomsMode = $(this).val();
      $('#health-symptoms').append(healthSymptomsMode + "<br>");
      healthSymptoms.push(healthSymptomsMode);
    });


      $("#coping-methods").show();
      var copingMethods = [];
      $("input:checkbox[name=coping-methods]:checked").each(function(){
        var copingMethodsMode = $(this).val();
        $('#coping-methods').append(copingMethodsMode + "<br>");
        copingMethods.push(copingMethodsMode);
      });



      if (warningSigns.length > copingMethods.length && healthSymptoms.length > copingMethods.length) {
        alert("You are stressed!");
      } else if (warningSigns.length === copingMethods.length && healthSymptoms.length === copingMethods.length) {
        alert("You are average!");
      } else {
        alert("You are healthy!");
      }


  });
});
