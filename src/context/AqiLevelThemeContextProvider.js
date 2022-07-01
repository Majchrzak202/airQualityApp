import React, { useState, createContext, useContext } from "react";

export const aqiLevelContext = createContext();

export function AqiLevelThemeContextProvider ({ children })  {
  const [aqiTheme, setAqiTheme] = useState("");

  const themeChangeHandler = (aqiLevel) => {
    if (aqiLevel <= 50) {
      setAqiTheme("Green");
    }
    if (aqiLevel >= 51 && aqiLevel <= 99) {
      setAqiTheme("Yellow");
    }
    if (aqiLevel >= 100 && aqiLevel <= 149) {
      setAqiTheme("Orange");
    }
    if (aqiLevel >= 150 && aqiLevel <= 199) {
      setAqiTheme("Red");
    }
    if (aqiLevel > 200) {
        setAqiTheme('Purple')
    }
  };

  return <aqiLevelContext.Provider value={{aqiTheme, themeChangeHandler}}>{children}</aqiLevelContext.Provider>;
};

export default AqiLevelThemeContextProvider;

export function useAqiTheme() {
    return useContext(aqiLevelContext)
}
 