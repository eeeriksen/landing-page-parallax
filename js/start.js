window.addEventListener('scroll', function(){
	var y = window.pageYOffset;
	//Tralado en el eje vertical el titulo segun el top del window
	document.getElementById('roti').style.transform =
		"translateY(" + y * 0.35 + "px)";
	//capturo el top del ultimo elemento de la seccion anterior al paralax que viene
	//y traslado el titulo si es mayor la posicion del scroll
	var refKuk = document.querySelector('p.second-ro').offsetTop;
	if (y > refKuk) {
		document.getElementById('kuti').style.transform =
			"translateY(" + (y - refKuk) * 0.35 + "px)";
	}
	//capturo el top del ultimo elemento de la seccion anterior al paralax que viene
	//y traslado el titulo si es mayor la posicion del scroll
	var refSal = document.querySelector('p.second-kuk').offsetTop;
	if (y > refSal) {
		document.getElementById('sati').style.transform =
			"translateY(" + (y - refSal) * 0.35 + "px)";
	}
}, true);

