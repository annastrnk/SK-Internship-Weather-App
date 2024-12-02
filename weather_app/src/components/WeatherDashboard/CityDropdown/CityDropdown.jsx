export default function CityDropdown({ cities, onSelectCity }) {
  return (
    <div className="search-options">
      <ul className="cities-list">
        {cities.map((cityItem, index) => (
          <li
            key={index}
            className="cities-link main-font"
            onClick={() => onSelectCity(cityItem.name)}
          >
            {cityItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
