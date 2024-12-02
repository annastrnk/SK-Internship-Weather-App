import { fetchCities, fetchWeather } from './api';

export const handleCitySearch = async (city, setCities, setError) => {
  
    try {
      const data = await fetchCities(city);

      if (data.list && data.list.length > 0) {
        setCities(data.list);
        setError(null);
      } else {
        setCities([]);
        setError('City not found, please try to change your search query');
      }
    } catch (error) {
      console.error('Error fetching cities', error);
      setError('An error occurred while searching for cities.');
    }
};

export const getWeatherForCity = async (selectedCity, setWeather, setCities, setCity, setError) => {
  try {
    const data = await fetchWeather(selectedCity);
    setWeather(data);
    setCities([]); 
    setCity(''); 
    setError(null);
  } catch (error) {
    console.error('Error fetching the weather data', error);
    setError('An error occurred while fetching the weather data.');
  }
};


