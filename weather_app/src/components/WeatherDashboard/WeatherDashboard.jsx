import SearchBar from "./SearchBar/SearchBar";
import CityDropdown from "./CityDropdown/CityDropdown";
import WeatherWidget from "./WeatherWidget/WeatherWidget";
import PopularCities from "./PopularCities/PopularCities";
import {
  handleCitySearch,
  getWeatherForCity,
} from "../../helpers/weatherLogic";
import { fetchCityByGeolocation } from "../../helpers/fetchCityByGeolocation.js";
import "./WeatherDashboard.scss";
import dayImage from "../../../public/images/day.png";
import nightImage from "../../../public/images/night.png";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const { theme, setTheme } = useContext(ThemeContext);

  const weatherWidgetRef = useRef(null);

  const handleCitySelect = (selectedCity) => {
    getWeatherForCity(selectedCity, setWeather, setCities, setCity, setError);
  };

  const scrollToWeatherWidget = () => {
    if (weatherWidgetRef.current) {
      weatherWidgetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 21 || currentHour < 6) {
      setTheme("night");
    } else {
      setTheme("day");
    }
    fetchCityByGeolocation(handleCitySelect);
  }, [setTheme]);

 

  useEffect(() => {
    if (weather) {
      scrollToWeatherWidget();
    }
  }, [weather]);

  return (
    <>
      <header
        className={`weather-dashboard ${
          theme === "night" ? "night-theme" : "day-theme"
        }`}
        style={{
          backgroundImage: `url(${theme === "night" ? nightImage : dayImage})
          `,
        }}
      >
        <div className="container">
          <div className="search-dropdown">
            <SearchBar
              city={city}
              onCityChange={setCity}
              onSelectCity={handleCitySelect}
              onSearch={() => handleCitySearch(city, setCities, setError)}
            />

            {cities.length > 0 && (
              <CityDropdown cities={cities} onSelectCity={handleCitySelect} />
            )}
            {error && (
              <div className="search-options">
              <ul className="cities-list">
                <li className="error-link">{error}</li>
              </ul>
              </div>
            )}
          </div>
          {weather && (
            <div ref={weatherWidgetRef}>
              <WeatherWidget weather={weather} />
            </div>
          )}
        </div>
      </header>

      <PopularCities onSelectCity={handleCitySelect} />
    </>
  );
}
