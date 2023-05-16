import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import PathnameToPage from "./Pathnames";
import Homepage from "../pages/Homepage";

/**
 * Router()
 * @summary - Controls displaying content.
 * @return {JSX.Element} - JSX element of the correct page.
 */
function Router(): JSX.Element {
  const { currentPath, navigate } = useContext(NavigationContext)!;

  /**
   * Valid pathname -> Displays corresponding page
   */
  if (PathnameToPage.has(currentPath)) {
    return PathnameToPage.get(currentPath)!["page"]!;
  }

  /**
   * Invalid pathname -> Redirects to homepage
   * Specifically for GitHub Pages
   */
  if (currentPath !== "/Modern-React-with-Redux-2023-Update-Practice/") {
    navigate("/Modern-React-with-Redux-2023-Update-Practice/");
  }

  // Display homepage
  return <Homepage />;
}

export default Router;
