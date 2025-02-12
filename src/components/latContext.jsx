import { createContext, useState } from "react";

export const latContext = createContext();

export const LatProvider = ({ children }) => {
  const [lat, setlat] = useState('');

  return (
    <latContext.Provider value={{ lat, setlat }}>
      {children}
    </latContext.Provider>
  );
};
