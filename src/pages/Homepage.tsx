import { useContext } from "react";
import Header from "../components/Header";
import NavigationContext from "../context/Navigation";
import PathnameToPage from "../router/Pathnames";
import { ButtonTailwindCSS, ButtonSpanTailwindCSS } from "../util/util";

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
          className={"relative inline-flex mb-2 mr-2 " + ButtonTailwindCSS}
          key={index}
          onClick={() => navigate(pathname, true)}
        >
          <span className={"px-5 py-2.5 text-sm " + ButtonSpanTailwindCSS}>
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
