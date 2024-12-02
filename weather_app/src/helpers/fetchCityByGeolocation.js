import { fetchCityByCoordinates } from "./api"

export async function fetchCityByGeolocation(handleCitySelect) {
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
}
