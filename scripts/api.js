window.addEventListener("load", () => {
	let lon;
	let lat;

	let temperaturaValor = document.getElementById("temperatura-valor");
	let temperaturaDescripcion = document.getElementById(
		"temperatura-descripcion"
	);

	let ubicacion = document.getElementById("ubicacion");
	let icono = document.getElementById("icono");

	let vientoVelocidad = document.getElementById("viento-velocidad");

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((posicion) => {
			//console.log(posicion.coords.latitude)
			lon = posicion.coords.longitude;
			lat = posicion.coords.latitude;
			//ubicación actual
			//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a68273b19f28a33b1ae57a8541b6ec3`

			//ubicación por ciudad
			const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=7a68273b19f28a33b1ae57a8541b6ec3`;

			//console.log(url)

			fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					let temp = Math.round(data.main.temp);
					console.log(data);
					temperaturaValor.textContent = `${temp} ° C`;

					//console.log(data.weather[0].description)
					let desc = data.weather[0].description;
					temperaturaDescripcion.textContent = desc.toUpperCase();
					ubicacion.textContent = data.name;
					let iconCode = data.weather[0].icon;

					//para iconos estáticos
					const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`;

					icono.src = urlIcon;
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}
});
