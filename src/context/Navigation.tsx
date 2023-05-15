import { createContext, useState, useEffect } from "react";

type NavigationType = {
  currentPath: string;
  navigate: (to: string) => void;
};

const NavigationContext = createContext<NavigationType | null>(null);

function NavigationProvider(_: { children: React.ReactNode }): JSX.Element {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listens for popstate event
  // Cause component to rerender
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    // popstate -> Checks "Back & forth" button
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  });

  function navigate(to: string): void {
    window.history.pushState({}, "", to);

    // Triggers useEffect -> EventListener "popstate"
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {_.children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;

// Router Redirection
// window.history.pushState({}, "", "/<path>");
// Dont use
// window.location = "<url>";

// Rewriting Default Browser href Navigation
// event.preventDefault();

// Debugging Default Browser back/forward Navigation
// window.addEventListener("popstate", () => console.log("Im at", window.location.pathname));
