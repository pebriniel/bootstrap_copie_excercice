
$(document).scroll(function(e){
	var $window = $(window);

	if($window.scrollTop() >= 50 && !$("#menu-header").hasClass("menu-fixed")){
		$("#menu-header").addClass("menu-fixed");
		$(".titre-header").addClass("hide-element");
		$(".tel").addClass("hide-element");
		$("#scroll").addClass("btn-scroll-show");
	}
	else if($window.scrollTop() <= 50 && $("#menu-header").hasClass("menu-fixed")){
		$("#menu-header").removeClass("menu-fixed");
		$(".titre-header").removeClass("hide-element");
		$(".tel").removeClass("hide-element");
		$("#scroll").removeClass("btn-scroll-show");
	}
});

$(document).ready(function(){
	
	function __send(objet){
		switch(objet.type){
			case "youtube":
				return '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+objet.content+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
			break;
			case "image":
				return '<img src="'+objet.content+'" />';
			break;	
			case "texte": 
				console.log(objet.content);
				return objet.content;
			break;
			case "random":
				var val = Math.floor(Math.random() * (objet.content - 0) + 0);
				console.log(objet.keyrandom[val]);
				return __send(objet.keyrandom[val]);
			break;
		}
	}
	
	var blague = [
			{
				"key": "michel", 
				"type": "random", 
				"content": 2,
				"random": false,
				"keyrandom": [
					{"type": "youtube", "content": "yVzHAhtcDrk"},
					{"type": "image", "content": "yVzHAhtcDrk"},
				]
			},
			{
				"key": "pokemon", 
				"type": "youtube", 
				"content": "lQOEhxTZbz8",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "alexandra", 
				"type": "youtube", 
				"content": "cene7lImm4w",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "boussad", 
				"type": "image", 
				"content": "https://jmcoi.files.wordpress.com/2012/08/trisomie.jpg",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "yassin", 
				"type": "youtube", 
				"content": "WFd5AsAl_0k",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "kevin", 
				"type": "youtube", 
				"content": "Zrob73hBgFc",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "aude", 
				"type": "youtube", 
				"content": "zPFhwbEuCOA",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "julien", 
				"type": "image", 
				"content": "http://www.biomidi.fr/6548-thickbox/chemise-blanche-manches-longues-stretch.jpg",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "pauline", 
				"type": "youtube", 
				"content": "_ddppl0pk_8",
				"random": false,
				"keyrandom": ""
			},
			{
				"key": "acs", 
				"type": "random", 
				"content": 9,
				"random": true,
				"keyrandom": [
					{"type": "texte", "content": "Alliance civique de Serbie"},
					{"type": "texte", "content": "Agent contractuel subventionné"},
					{"type": "texte", "content": "Actividades de construcción y servicios"},
					{"type": "texte", "content": "Access Code School"},
					{"type": "texte", "content": "Association canadienne de soccer"},
					{"type": "texte", "content": "American Chemical Society"},
					{"type": "texte", "content": "Affiliated Computer Services"},
					{"type": "texte", "content": "Advanced Camera for Surveys"},
					{"type": "texte", "content": "Automobiles Classiques Sportives"}
				]
			},
			
		];
	
	$("#scroll").click(function(e){
		$(window).scrollTop(0);
	});
	
	
	$("#burger").click(function(e){
		if(!$("header nav").hasClass("showMenu")){
			console.log("add");
			$("header nav").addClass("showMenu");
			$("#burger").removeClass("icon-menu");
			$("#burger").addClass("icon-down");
		}
		else{
			console.log("erreur");
			$("header nav").removeClass("showMenu");
			$("#burger").addClass("icon-menu");
			$("#burger").removeClass("icon-down");
		}
	});
	
	$("#btn-search").click(function(e){
		e.preventDefault();
		var search = $("input").val();
		var result = false;
		var chain = "EMPTY";
		
		$("#popup").css("display", "block");
		
		console.log(search.trim().toLowerCase());
		for(var i = 0; i < blague.length; i ++){
			if(blague[i].key === search.trim().toLowerCase()){
				result = i;
			}
		}
		
		if(result === "EMPTY"){
			chain = 'Ohhh, ce mot clé n\'existe pas';
		}
		else{
			chain = __send(blague[result]);
		}
		
		$("#popup-content").html(chain);
		
	});
	
	$(".btn-quit-popup, #popup").click(function(e){
		if($("#popup").css("display") == "block"){	
			$("#popup").css("display", "none"); 
			$("#popup-content").empty();
		}
	});
	
});