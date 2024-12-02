import "./PopularCities.scss";
import popularCities from "../../../assets/popularCities.json";

export default function PopularCities({ onSelectCity }) {
  return (
    <section className="popular-cities-block">
      <div className="container">
        <h2 className="title">
          Check the weather in most popular cities in the world
        </h2>
        <div className="cities-flex">
          {popularCities.map((item) => (
            <div
              className="city-card"
              key={item.id}
              onClick={() => onSelectCity(item.text)}
            >
              <img className="city-img" src={item.src} alt={item.alt}></img>
              <button className="city-text normal-font">{item.text}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
