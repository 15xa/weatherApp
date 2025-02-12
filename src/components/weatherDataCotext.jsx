import { createContext, useState } from "react";

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <weatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </weatherContext.Provider>
  );
};
