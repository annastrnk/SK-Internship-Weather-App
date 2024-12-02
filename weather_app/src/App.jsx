import "./App.css";
import { useState } from "react";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import WeatherDashboard from "./components/WeatherDashboard/WeatherDashboard";
import {ThemeContext} from "./context/themeContext"


function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <WeatherDashboard />
      <Faq />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
