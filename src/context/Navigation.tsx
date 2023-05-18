import { createContext, useState, useEffect } from "react";

/**
 * NavigationContext type properties
 * @property {string} currentPath - Current URL path.
 * @property {Function - Void} navigate - Redirects browser URL.
 * @property {string} navigate.to - URL path to redirect.
 * @property {string} navigate.isValid - URL path is valid.
 */
type NavigationType = {
  currentPath: string;
  navigate: (to: string, isValid: boolean) => void;
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
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
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
  function navigate(to: string, isValid: boolean): void {
    // Adds to pushState stack
    window.history.pushState({}, "", to);

    // If pathname is not valid, do not reset the current pathname
    if (isValid) {
      // Triggers useEffect -> EventListener "popstate"
      setCurrentPath(to);
    }
    /**
     * Valid checks solves the following error:
     * react-dom.development.js:86 Warning: Cannot update a component (`NavigationProvider`)
     * while rendering a different component (`Router`). To locate the bad setState() call inside `Router`
     * Reason: Path does not exists
     */
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
