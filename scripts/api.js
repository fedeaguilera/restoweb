const api = `https://api.openweathermap.org/data/3.0/onecall?lat={-34.61315}&lon={-58.37723}&exclude={part}&appid=${apiKey}`;

const getClima = async () => {
	const data = await fetch(api);
	console.log(data);
};

getClima();
