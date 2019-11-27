
var msg = "Hover over an image below."

$(document).ready(function(){
	$(".preview").each(function(){
		$(this).on('mouseover focus',function(){
			$("#image").css("background-image","url("+$(this).attr("src")+")");
			$("#image").html($(this).attr("alt"));
		});
		$(this).mouseleave(function(){
			$("#image").css("background-image","url('')");
			$("#image").html(msg);
		});
		$(this).blur(function(){
			$("#image").css("background-image","url('')");
			$("#image").html(msg);
		});
	});
});
