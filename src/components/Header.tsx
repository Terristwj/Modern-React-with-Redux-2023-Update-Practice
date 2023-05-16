import "bulma/css/bulma.css";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import StarRailContext from "../context/StarRailProfiles";
import { HonkaiStarRailPathname } from "../router/Pathnames";
import PathnameToPage  from "../router/Pathnames";

/**
 * Header()
 * @summary - Dynamic Header for every page.
 * @return {JSX.Element} - JSX element of Header.
 */
function Header(): JSX.Element {
  /**
   *  Track current URL path
   */
  const { currentPath } = useContext(NavigationContext)!;

  /**
   * Honkai Star Rail
   */
  let headerContent: JSX.Element;
  const StarRail = useContext(StarRailContext);

  /**
   * Display corresponding Header
   */
  // Honkai Star Rail
  if (currentPath === HonkaiStarRailPathname) {
    headerContent = (
      <div className="hero-body">
        <p className="title">{PathnameToPage.get(currentPath)!["webpage"]}</p>
        <p className="subtitle has-text-weight-bold">
          Total Likes: {StarRail!["TotalLikesState"]["TotalLikes"]}
        </p>
      </div>
    );
  }
  // Homepage
  else {
    headerContent = (
      <div className="hero-body">
        <p className="title">Terris' React Practice</p>
      </div>
    );
  }

  return (
    <div>
      <section className="hero is-info">{headerContent}</section>
    </div>
  );
}

export default Header;
