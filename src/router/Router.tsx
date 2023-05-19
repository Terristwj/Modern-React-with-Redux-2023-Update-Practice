import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import PathnameToPage from "./Pathnames";
import Homepage from "../pages/Homepage";
import { HompagePathname } from "../router/Pathnames";

/**
 * Router()
 * @summary - Controls displaying content.
 * @return {JSX.Element} - JSX element of the correct page.
 */
function Router(): JSX.Element {
  const { currentPath } = useContext(NavigationContext)!;

  /**
   * Valid pathname -> Displays corresponding page
   */
  if (PathnameToPage.has(currentPath)) {
    return PathnameToPage.get(currentPath)!.page;
  }

  /**
   * Invalid pathname -> Redirects to homepage
   * Specifically for GitHub Pages
   */
  if (currentPath !== HompagePathname) {
    window.history.pushState({}, "", HompagePathname);
  }

  // Display homepage
  return <Homepage />;
}

export default Router;
