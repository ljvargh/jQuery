

$(document).ready(function(){
  $("#ch3form").submit(function(){
    if($("input[name='standing']").is(':checked') && $("input[name='fruit']").is(':checked')){
      return true;
    }
    else{
      alert("You must pick from both categories!");
      event.preventDefault();
    }
});
});
