import { createContext, useState, useEffect } from "react";

/**
 * NavigationContext type properties
 * @property {string} currentPath - Current URL path.
 * @property {Function - Void} navigate - Redirects browser URL.
 * @property {string} navigate.to - URL path to redirect.
 */
type NavigationType = {
  currentPath: string;
  navigate: (to: string) => void;
};

/** @global */
const NavigationContext = createContext<NavigationType | null>(null);

/**
 * Settings for NavigationContext React component
 * @summary - Replaces default "Back & Forth" and "Next Page" browser redirects to rerender App.
 * @param {{React.ReactNode}} props.children - Sub React components.
 * @return {JSX.Element} - JSX element with parsing values and children.
 */
function NavigationProvider(props: { children: React.ReactNode }): JSX.Element {
  const [currentPath, setCurrentPath] = useState(() => {
    // GitHub Pages URL startup with '/'
    let currentPath: string = window.location.pathname;
    currentPath = currentPath.endsWith("/") ? currentPath : currentPath + "/";
    return currentPath;
  });
  /**
   * "Back & Forth"
   * Listens for popstate event -> This component rerenders with children
   */
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    // popstate -> Checks "Back & Forth" button in browser
    window.addEventListener("popstate", handler);

    // Return informs useEffect what to do when the component disappears.
    return () => {
      window.removeEventListener("popstate", handler);
    };
  });

  /**
   * "Next Page"
   * Change the useState of currentPath
   */
  function navigate(to: string): void {
    // Adds to pushState stack
    window.history.pushState({}, "", to);

    // Triggers useEffect -> EventListener "popstate"
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {props.children}
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
