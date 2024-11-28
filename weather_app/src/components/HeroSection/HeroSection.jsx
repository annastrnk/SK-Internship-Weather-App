import "./HeroSection.scss";
import { useState } from "react";

import WeatherDetails from "./WeatheDetails/WeatherDetails";

export default function HeroSection() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const apiKey = "e57ea81a4642c27fb0eb1ad778a4a792";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log(data);

      setWeatherData(data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="hero-section">
      <div className="search-bar">
        <input
          type="search"
          className="input-search"
          placeholder="Start typing to search..."
        />
        <button className="search-button" onClick={handleSubmit}>
          <img src="../../../../public/images/loupe 1.svg" alt="search" />
        </button>
      </div>

      {weatherData && (
        <WeatherDetails
          temp={weatherData.main.temp}
          temp_max={weatherData.main.temp_max}
          temp_min={weatherData.main.temp_min}
          weather={weatherData.weather[0].main}
          weather_desc={weatherData.weather[0].description}
          name={weatherData.name}
          date={5555}
        />
      )}
    </div>
  );
}
