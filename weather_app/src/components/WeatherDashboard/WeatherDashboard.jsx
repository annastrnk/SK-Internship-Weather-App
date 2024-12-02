import SearchBar from "./SearchBar/SearchBar";
import CityDropdown from "./CityDropdown/CityDropdown";
import WeatherWidget from "./WeatherWidget/WeatherWidget";
import PopularCities from "./PopularCities/PopularCities";
import {
  handleCitySearch,
  getWeatherForCity,
} from "../../helpers/weatherLogic";
import {fetchCityByCoordinates} from '../../helpers/api.js'
import "./WeatherDashboard.scss";
import dayImage from "../../../public/images/day.png";
import nightImage from "../../../public/images/night.png";
import { useState, useRef, useEffect } from "react";
import { useContext } from "react"
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


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const data = await fetchCityByCoordinates(latitude, longitude);
            if (data && data.name) {
              handleCitySelect(data.name);
            } else {
              handleCitySelect("Kyiv");
            }
          } catch (error) {
            console.error("Error fetching city by coordinates: ", error);
            handleCitySelect("Kyiv");
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
       
          handleCitySelect("Kyiv");
        }
      );
    } else {
    
      handleCitySelect("Kyiv");
    }
  }, []);



  useEffect(() => {
    if (weather) {
      scrollToWeatherWidget();
    }
  }, [weather]);

  return (
    <>
      <header
        className={`weather-dashboard ${theme === "night" ? "night-theme" : "day-theme"}`}
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
              <ul className="cities-list">
                <li className="error-link">{error}</li>
              </ul>
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
