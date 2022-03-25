$(document).ready(function () {    
    console.log(data);
	
	var races = "";
	for (var i = 0; i < data.races.length; i++) {
		races += "<button class='get_race' data-id='" + i + "'>" + data.races[i].title + "</button>";
	}
	$(".Operative_Choose").append(races);
	
	var countries = "";
	for (var i = 0; i < data.countries.length; i++) {
		countries += "<button class='get_country' data-id='" + i + "'><img src='resources/img/" + data.countries[i].icon + "'></button>";
	}
	$(".Country_Choose").append(countries);
	
	$("body").overlayScrollbars({ });
	$(".CountryinfoWrapper").overlayScrollbars({ });
});

$("body").on("click", ".get_race", function(){
	var id = $(this).data("id");
	$(".get_race").removeClass("active");
	$(this).addClass("active");
	$("#RaceH3").html(data.races[id].title);
	$("#RaceDesc").html(data.races[id].description);
});

$("body").on("click", ".get_country", function(){
	var id = $(this).data("id");
	$(".get_country").removeClass("active");
	$(this).addClass("active");
	$("#CountryH3").html(data.countries[id].title);
	$("#CountryDesc").html(data.countries[id].description);
});

$(".BtnTo").on("click", function(){
	$(".DialogBlock").removeClass("active");
	console.log($(this).data("to"));
	$(".DialogBlock[data-block='" + $(this).data("to") + "']").addClass("active");
});