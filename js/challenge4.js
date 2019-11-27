

$(document).ready(function(){
  $("#ch4form").submit(function(){

    if($("#fullname").val()==""){
      $("#nameerrormsg").show();
      event.preventDefault();
    }
    else{
      $("#nameerrormsg").hide();
    }

    if($("#streetaddr").val()==""){
      $("#addrerrormsg").show();
      event.preventDefault();
    }
    else{
      $("#addrerrormsg").hide();
    }

  });
});
