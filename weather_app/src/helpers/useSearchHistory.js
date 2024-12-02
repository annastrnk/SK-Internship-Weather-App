// import { useState, useEffect } from "react";

// export function useSearchHistory() {
//   const [searchHistory, setSearchHistory] = useState(() => {
//     const savedHistory = localStorage.getItem("searchHistory");
//     return savedHistory ? JSON.parse(savedHistory) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//   }, [searchHistory]);

//   const saveToSearchHistory = (searchedCity) => {
//     setSearchHistory((prevHistory) => {
//       const updatedHistory = prevHistory.filter(city => city !== searchedCity);
//       updatedHistory.unshift(searchedCity);

//       return updatedHistory.slice(0, 5);
//     });
//   };

//   return {
//     searchHistory,
//     saveToSearchHistory,
//   };
// }

import { useState, useEffect } from "react";

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedHistory = localStorage.getItem("searchHistory");
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const saveToSearchHistory = (searchedCity) => {
    setSearchHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      if (!updatedHistory.some((city) => city.id === searchedCity.id)) {
        updatedHistory.unshift(searchedCity);
      }
      return updatedHistory.slice(0, 5);
    });
  };

  return {
    searchHistory,
    saveToSearchHistory,
  };
}
