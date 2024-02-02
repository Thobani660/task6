const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=7gsWAHLeT0w7es6FofOXk1',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '96367a807cmsh0593331dbf7a906p13c30ajsnae461c6aecd8',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
	$(".albums").text("The Life Of Pablo")
	$("#Albumname").text("Name:Life of Pablo\n Release Date:2016-02-16 ")
	$("#Artist").text("Kanye West")
	$("#Art").text("Kanye Omari West\n known as 'Ye'")
	$("#Release").text("2016")
;
function tracks(){
    console.log(tracks)
}
	document.getElementById("track").innerHTML = "New Album";


$.ajax(settings).done(function (response) {
		$("#main1").hide();
		$("#main2").show();
		$("ul").show()
	
		$(document).ready(function(){
		$(".tracks").click(function(){
			$("#playlist").fadeIn(2000);
			$(".tracks").fadeOut(1000);
		})});
		$("#playlist").dblclick(function(){
			$("#playlist").fadeOut(2000)
			$(".tracks").show(2000)
		});

		var tracks = response.albums[0].tracks.items
	
	let html = "<br><br><br>"
	for(let i = 0; i < tracks.length; i++){
		html += `<div id="tracks${i}" class="tracks">
				  <div class="flat-color-icons--music ">
				  </div>
		         ${tracks[i].name}
				 </div>
				<br><br>`
	}
	$(".Album").html(html)


	for(let i = 0; i < tracks.length; i++){
		$(`#tracks${i}`).click(function(){
			$("#songs").text(response.albums[0].tracks.items[i].name);
			$("#playlist").fadeIn(2000);
			$(".tracks").fadeOut(1000);
		});
	}
	// $("#song").html(response.albums[0].tracks.items[i].name)

});
 
$(document).ready(function(){
	$("#track").click(function(){
	  $(".tracks").fadeIn(3000);
	});
	$("#track").dblclick(function(){
	  $(".tracks").fadeOut(3000);
	});
  });


$(document).ready(function(){
	$(".albums").click(function(){
	  	$("#Albumname").fadeIn(1000);
		  $("#Artist").hide();
		$(".albums").hide();
		$("#h35").hide();
	});
    $("#Albumname").dblclick(function(){
		$("#Albumname").fadeOut(2000);
		$("").show(2000);
		$(".albums").show(2000);
		$("#Artist").show(2000)
		$("#h34").show();
		$("#h35").show();
	});
});

$(document).ready(function(){
	$("#Artist").click(function(){
	  	$("#Art").fadeIn(1000);
		$("#Artist").hide()
		$("#h34").hide();
		$(".albums").hide();
	});
    $("#Art").dblclick(function(){
		$("#Art").fadeOut(2000);
		$("#genre").show(2000);
		$(".albums").show(2000);
		$("#Artist").show(2000)
		$("#h34").show();
		$("#h35").show();
	});
});
$(document).ready(function(){
	$("#track").click(function(){
	$("#track").text("Playlist");	
	});
});

$(document).ready(function(){
	$(".tracks").click(function(){
		$("#playlist").fadeIn(1000);
		$(".tracks").fadeOut(1000)
	})
});
$(document).ready(function(){
	$(".bi--three-dots-vertical").click(function(){
	 $("#three").slidedown("slow")
	});
  });
