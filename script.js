
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');

searchBtn.addEventListener('click', () => {
	const city = searchBox.value;

	const apiKey = 'ba95c6127e316b0444be5a794257797b';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	

	async function loadData(){
		const response = await fetch(apiUrl);
		if (response.status === 404) {
			document.getElementById('error-div').style.display = 'block';
			document.getElementById('showData').style.display = 'none';
		}
		else{
			const data = await response.json();


			document.getElementById('weather').innerHTML = data.weather[0].main;
			document.getElementById('temprature').innerHTML =Math.round(data.main.temp)  + "°C";
			document.getElementById('city').innerHTML = data.name;
			document.getElementById('humidity').innerHTML = data.main.humidity + "%";
			document.getElementById('wind').innerHTML = data.wind.speed + "km/h";


			document.getElementById('error-div').style.display = 'none';
			document.getElementById('showData').style.display = 'block';

			if (data.weather[0].main == 'Rain') {
				document.getElementById('container').style.backgroundImage = 'url("images/rain.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';
			}
			else if (data.weather[0].main == 'Clouds') {
				document.getElementById('container').style.backgroundImage = 'url("images/clouds.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';

			}
			else if (data.weather[0].main == 'Clear') {
				document.getElementById('container').style.backgroundImage = 'url("images/clear.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';
			}
			else if (data.weather[0].main == 'Snow') {
				document.getElementById('container').style.backgroundImage = 'url("images/snow.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';
			}
			
			else if (data.weather[0].main == 'Drizzle') {
				document.getElementById('container').style.backgroundImage = 'url("images/drizzle.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';
			}

			else if (data.weather[0].main == 'Thunderstorm') {
				document.getElementById('container').style.backgroundImage = 'url("images/thunder.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';
			}
			else{
				document.getElementById('container').style.backgroundImage = 'url("images/mist.jpg")';
				document.getElementById('container').style.backgroundSize = '100% 100%';
			}

		}

	}
	loadData();
	searchBox.value = '';
});




/*
rain - https://pxhere.com/en/photo/605615
clouds - https://pxhere.com/en/photo/698395
snow - https://unsplash.com/photos/white-and-blue-balloons-on-bare-tree-kM1p1c1q8qo
Drizzle - https://unsplash.com/photos/water-droplets-on-glass-window-2Z-uXuaGADg
Thunderstorm - https://unsplash.com/photos/black-and-white-abstract-painting-sCrqMG2f6qo
Mist - https://unsplash.com/photos/two-brown-wooden-armchairs-on-brown-sand-jc58V8FpiTU

*/