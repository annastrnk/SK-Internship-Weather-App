// import API_KEY from "./apiConfig";

const API_KEY = "e57ea81a4642c27fb0eb1ad778a4a792";


export async function fetchCities(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${API_KEY}`);
  const data = await response.json();
  return data; 
}


export async function fetchWeather(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
  const data = await response.json();
  return data; 
}
export async function fetchCityByCoordinates(latitude, longitude) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  const data = await response.json();
  return data; 
}