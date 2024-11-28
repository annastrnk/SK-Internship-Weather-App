import "./PopCity.scss";
import cities from "../../assets/cities.json";



export default function PopCity() {
  return (
    <section className="container">
      <h2 className="title title-pop-city">
        Check the weather in most popular cities in the world
      </h2>
      <div className="cities-flex">
        {cities.map((item) => (
          <div className="city-card" key={item.id}>
            <img className="city-img" src={item.src} alt={item.alt}></img>
            <span className="city-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
