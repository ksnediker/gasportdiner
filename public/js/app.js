console.log("app loaded");

$(function() {

// scroll to applicable container from navbar links

	$("#menu-link").click(function() {
		document.getElementById("menu-container").scrollIntoView()
	});

	$("#location-link").click(function() {
		document.getElementById("location-container").scrollIntoView()
	});

	$("#contact-link").click(function() {
		document.getElementById("contact-container").scrollIntoView()
	});	

// back to top button that scrolls to header

	$(".top").click(function() {
		document.getElementById("header").scrollIntoView()
	});

	// Google map API for location of diner
	var initilize = function() {
		//Gasport Diner location
		var gasportDiner = new google.maps.LatLng(43.197681, -78.574986);
		console.log(gasportDiner);

		//Options for map
		var mapOptions = {
			center: gasportDiner,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// places map on HTML canvas
		var dinerMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var dinerMarker = new google.maps.Marker({
			position: gasportDiner,
			map: dinerMap,
			title: "The Gasport Diner"
		});
		console.log("map loaded")
		console.log(mapOptions);
	}
	initilize();
});

