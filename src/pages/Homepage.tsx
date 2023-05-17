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
    // Avoids adding button for homepage
    if (pathname !== currentPath) {
      buttons.push(
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          key={index}
          onClick={() => navigate(pathname, true)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            {PathnameToPage.get(pathname)!.title}
          </span>
        </button>
      );
    }
  });

  // Add button for each page here
  return (
    <div>
      <Header />
      <div className="p-5 space-y-2">{buttons}</div>
    </div>
  );
}

export default Homepage;
