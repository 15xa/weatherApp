import { createContext, useState } from "react";

export const lonContext = createContext();

export const LonProvider = ({ children }) => {
  const [lon, setlon] = useState(false);

  return (
    <lonContext.Provider value={{ lon, setlon }}>
      {children}
    </lonContext.Provider>
  );
};
