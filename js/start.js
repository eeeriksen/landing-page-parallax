window.addEventListener('scroll', function(){
	var y = window.pageYOffset;
	//Tralado en el eje vertical el titulo segun el top del window
	document.getElementById('roti').style.transform =
		"translateY(" + y * 0.35 + "px)";
	//capturo el top del ultimo elemento de la seccion anterior al paralax que viene
	//y traslado el titulo si es mayor la posicion del scroll
	var refKuk = document.getElementById('kukenan').offsetTop;
	if (y > refKuk - (window.innerHeight/1.2)) {
		document.getElementById('kuti').style.transform =
			"translateY(" + (y - refKuk) * 0.35 + "px)";
	}
	//capturo el top del ultimo elemento de la seccion anterior al paralax que viene
	//y traslado el titulo si es mayor la posicion del scroll
	var refSal = document.getElementById('salto-angel').offsetTop;
	if (y > refSal - (window.innerHeight)) {
		document.getElementById('sati').style.transform =
			"translateY(" + (y - refSal) * 0.35 + "px)";
	}
}, true);

