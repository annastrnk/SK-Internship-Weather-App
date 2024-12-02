export default function SearchBar({ city, onCityChange, onSearch }) {
  function handleSearch() {
    if (city) {
      onSearch(city);
      onCityChange("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input-search main-font"
        placeholder="Start typing to search..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={handleSearch}>
        <img
          className="icon"
          src="../../../../public/images/loupe 1.svg"
          alt="search"
        />
      </button>
    </div>
  );
}
