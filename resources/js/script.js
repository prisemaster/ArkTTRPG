$(document).ready(function () {    
    console.log(data);
	var races = "";
	for (var i = 0; i < data.races.length; i++) {
		races += "<button class='get_race' data-id='" + i + "'>" + data.races[i].title + "</button>";
	}
	$(".Operative_Choose").append(races);
	$("body").overlayScrollbars({ });
});

$("body").on("click", ".get_race", function(){
	var id = $(this).data("id");
	$(".get_race").removeClass("active");
	$(this).addClass("active");
	$("#RaceH3").html(data.races[id].title);
	$("#RaceDesc").html(data.races[id].description);
});

$(".BtnTo").on("click", function(){
	$(".DialogBlock").removeClass("active");
	console.log($(this).data("to"));
	$(".DialogBlock[data-block='" + $(this).data("to") + "']").addClass("active");
});