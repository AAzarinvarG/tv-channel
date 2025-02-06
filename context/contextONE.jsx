import { createContext, useContext, useState, useEffect } from "react";

const ContextOne = createContext();

export function Context({ children }) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [homePageStatus, setHomePageStatus] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (homePageStatus) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [homePageStatus]);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  return (
    <ContextOne.Provider
      value={{
        menuStatus,
        setMenuStatus,
        homePageStatus,
        setHomePageStatus,
        windowWidth,
      }}
    >
      {children}
    </ContextOne.Provider>
  );
}

export function UseContext() {
  const context = useContext(ContextOne);
  if (context === undefined) throw new Error("Error in Context");
  return context;
}
