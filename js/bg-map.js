(function($){
	jQuery(document).ready(function($) {	

		$('.google-map').each(function(){
			var latitude = $(this).data('latitude');
			var longitude = $(this).data('longitude');
			var marker = $(this).data('marker');
			var title = $(this).data('title');
			var description = $(this).data('description');

			var myMarkers = {"markers": [ {"latitude": latitude, "longitude": longitude, icon: marker, "title": title, "description": description }]};		
			$(this).mapmarker({
				center: latitude+","+longitude,	
				zoom: 18,		
				controls: true,
				mapType: 'roadmap',
				panControl: true,
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: true,
				scrollwheel: false,
				plusMinusZoom: true,
				draggable: true,
				doubleclickzoom: true,
				customMarkers: true,
				markers: myMarkers,
				styling: 1,
				featureType: "all",
				elementType: "all",
				visibility: "on",
				invert_lightness: false,
				color: "",
				hue: "",
				saturation: -100,
				lightness: 11.200000000000017,
				gamma: 1,
				animation: google.maps.Animation.BOUNCE,
			});


		})	
		
	});
})(jQuery);