import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import StarRailContext from "../context/StarRailProfiles";
import { HonkaiStarRailPathname } from "../router/Pathnames";
import PathnameToPage from "../router/Pathnames";

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
  const StarRail = useContext(StarRailContext);

  /**
   * Display corresponding Header
   * Auto retrieves from "../router/Pathnames"
   */
  let titleText: string = PathnameToPage.get(currentPath)
    ? PathnameToPage.get(currentPath)!.title
    : "";
  let subTitleText: string = currentPath;

  /**
   * Display any custom content for corresponding Header
   */
  // Honkai Star Rail
  if (currentPath === HonkaiStarRailPathname) {
    subTitleText = `Total Likes: ${StarRail!.TotalLikesState.TotalLikes}`;
  }

  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">{titleText}</p>
          <p className="subtitle has-text-weight-bold">{subTitleText}</p>
        </div>
      </section>
    </div>
  );
}

export default Header;