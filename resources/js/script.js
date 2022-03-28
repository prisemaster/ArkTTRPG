var Character = { 
	"Name": null,
	"Player": null,
	"Story" : null,
	"Race" : null,
	"Country": null,
	"Class": null,
	"Gender": 0,
	"Rarity": 1,
	"Str": 1, "Str_Add": 0,
	"Dex": 1, "Dex_Add": 0,
	"End": 1, "End_Add": 0,
	"Cha": 1, "Cha_Add": 0,
	"Man": 1, "Man_Add": 0,
	"Per": 1, "Per_Add": 0,
	"Int": 1, "Int_Add": 0,
	"Wit": 1, "Wit_Add": 0,
	"Stats": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	"Ini": 0,
	"Hp": 0,
	"Mana": 0,
	"Ori": 0,
	"Trauma": 0,
	"Xp": 0,
	"JobXp": 0,
	"Active": [],
	"Passive": [],
	"Equip": "",
	"Notes": "",
	"Ass": 0, "Ass_Add": 0,
	"Control": 0,
	"Catalyst": 0
};

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
	
	var classes = "";
	for (var i = 0; i < data.classes.length; i++) {
		classes += "<button class='get_class' data-id='" + i + "'><img src='resources/img/" + data.classes[i].icon + "'></button>";
	}
	$(".Classes_Choose").append(classes);
	
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

$("body").on("click", ".get_class", function(){
	var id = $(this).data("id");
	$(".get_class").removeClass("active");
	$(this).addClass("active");
	$("#ClassesH3").html(data.classes[id].title);
	$("#ClassesDesc").html(data.classes[id].description);
});

$(".BtnTo").on("click", function(){
	$(".DialogBlock").removeClass("active");
	console.log($(this).data("to"));
	$(".DialogBlock[data-block='" + $(this).data("to") + "']").addClass("active");
	FillChar();
});

async function FillChar() {
	
	FlushChar();
	
	Character.Name = $("#InputName").val();
	Character.Player = $("#InputPlayer").val();
	Character.Story = $("#InputStory").val();
	Character.Race = $(".get_race.active").data("id");
	
	var ClassBonus = data.races[Character.Race].params.split(";");
	for (var i = 0; i < ClassBonus.length; i++) {
		await ApplyBonus(ClassBonus[i]);
	}
	Character.Country = $(".get_country.active").data("id");
	Character.Class = $(".get_class.active").data("id");
	console.log(Character);
}

async function FlushChar() {
	Character.Name = null;
	Character.Player = null;
	Character.Story = null;
	Character.Country = null;
	Character.Race = null;
	Character.Class = null;
	Character.Gender = 0;
	Character.Gender = 1;
	Character.Str = 1; Character.Str_Add = 0;
	Character.Dex = 1; Character.Dex_Add = 0;
	Character.End = 1; Character.End_Add = 0;
	Character.Cha = 1; Character.Cha_Add = 0;
	Character.Man = 1; Character.Man_Add = 0;
	Character.Per = 1; Character.Per_Add = 0;
	Character.Int = 1; Character.Int_Add = 0;
	Character.Wit = 1; Character.Wit_Add = 0;
	Character.Ini = 1;
	Character.Stats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	Character.Hp = 0;
	Character.Mana = 0;
	Character.Ori = 0;
	Character.Trauma = 0;
	Character.Trauma = 0;
	Character.Xp = 0;
	Character.JobXp = 0;
	Character.Control = 0;
	Character.Catalyst = 0;
	Character.Active = [];
	Character.Passive = [];
	Character.Equip = "";
	Character.Notes = "";
	Character.Ass = 0; Character.Ass_Add = 0;
}

async function ApplyBonus(Bonus, callback) {
	var Stat = Bonus.slice(0,3);
	switch (Stat) {
		case "Str":
			Character.Str_Add += parseInt(Bonus.charAt(4));
			break;
		case "Dex":
			Character.Dex_Add += parseInt(Bonus.charAt(4));
			break;
		case "End":
			Character.End_Add += parseInt(Bonus.charAt(4));
			break;
		case "Cha":
			Character.Cha_Add += parseInt(Bonus.charAt(4));
			break;
		case "Man":
			Character.Man_Add += parseInt(Bonus.charAt(4));
			break;
		case "Per":
			Character.Per_Add += parseInt(Bonus.charAt(4));
			break;
		case "Int":
			Character.Int_Add += parseInt(Bonus.charAt(4));
			break;
		case "Wit":
			Character.Wit_Add += parseInt(Bonus.charAt(4));
			break;
		case "Skl":
			var SkillId = parseInt(Bonus.slice(4,5));
			Character.Stats[SkillId] += parseInt(Bonus.charAt(6));
			break;
		case "Abl":
			var AblId = parseInt(Bonus.slice(4,6));
			// AddAbility
			break;
	}		
}