import farenheittoCelcius from "../../../helpers/converter";
import { formatDate } from "../../../helpers/formatDate";


export default function WeatherWidget({ weather }) {
  const iconCode = weather?.weather[0]?.icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const formattedDate = formatDate();

  return (
    <div className="weather-details">
      <div className="weather-block">
        <img src={iconUrl} alt={weather.weather[0].description} />
        <div className="weather-info">
          <div className="main-weather-info">
            <h3>{farenheittoCelcius(weather.main.temp)}°C </h3>
            <p>{weather.weather[0].main}</p>
            <span className="normal-font">{weather.weather[0].description} </span>
          </div>
          <div className="weather-city">
            <h3>{weather.name} </h3>
            <span className="normal-font">{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="weather-add">
        <div className="weather-add-min">
          <span className="normal-font">Min</span>
          <h3>{farenheittoCelcius(weather.main.temp_min)}°C</h3>
        </div>
        <div className="weather-add-max">
          <span className="normal-font">Max</span>
          <h3>{farenheittoCelcius(weather.main.temp_max)}°C</h3>
        </div>
      </div>
    </div>
  );
}