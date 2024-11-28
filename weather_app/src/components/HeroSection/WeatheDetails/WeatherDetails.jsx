

export default function WeatherDetails( props) {
  
const{temp,temp_max, temp_min,weather, weather_desc, name, date } = props;

  return (
    <div>

      <div className="weather-info">
        <div className="main-weather-info">
            <p>{temp} temp</p>
            <p>{weather} weatcher</p>
            <p>{weather_desc} desc</p>
        </div>
        <div className="weather-city">
            <p>{name} name</p>
            <p>{date} date</p>
        </div>
      </div>

      <div className="weatcher-add">
        <span>{temp_min} min</span>
        <span>{temp_max} man</span>

      </div>


    </div>
  );
}
