import "bulma/css/bulma.css";
import { useContext } from "react";
import Header from "../components/Header";
import NavigationContext from "../context/Navigation";
import PathnameToPage from "../router/Pathnames";

/**
 * Homepage()
 * @summary - Contain and display Homepage React components.
 * @return {JSX.Element} - JSX element of Homepage.
 */
function Homepage(): JSX.Element {
  const { currentPath, navigate } = useContext(NavigationContext)!;

  /**
   * Configures button appearance
   * Auto retrieves from "../router/Pathnames"
   */
  let buttons: JSX.Element[] = [];
  [...PathnameToPage.keys()].forEach((pathname: string, index: number) => {
    buttons.push(
      <button key={index} onClick={() => navigate(pathname)}>
        {PathnameToPage.get(pathname)!["webpage"]}
      </button>
    );
  });

  // Add button for each page here
  return (
    <div>
      <Header />
      {buttons}
      {currentPath}
    </div>
  );
}

export default Homepage;
