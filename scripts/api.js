const apiKey = "7a68273b19f28a33b1ae57a8541b6ec3";
const api = `https://api.openweathermap.org/data/3.0/onecall?lat={-34.61315}&lon={-58.37723}&exclude={part}&appid=${apiKey}`;

const getClima = async () => {
	const data = await fetch(api);
	console.log(data);
};

getClima();
