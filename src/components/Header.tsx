import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import StarRailContext from "../context/StarRailProfiles";
import PathnameToPage, {
  HompagePathname,
  HonkaiStarRailPathname,
  TablePathname,
} from "../router/Pathnames";

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
   * Display corresponding Header and Subtitle
   * Auto retrieves from "../router/Pathnames"
   * Display Default Homepage if invalid URL
   */
  let key: string;
  if (PathnameToPage.get(currentPath)) {
    key = currentPath;
  } else {
    key = HompagePathname;
  }
  const titleText: string = PathnameToPage.get(key)!.title;
  let subTitleText: string = key;

  /**
   * Display any custom content for corresponding Header
   */
  // Honkai Star Rail
  // Table
  const usesTotalLikes = [HonkaiStarRailPathname, TablePathname];
  if (usesTotalLikes.includes(currentPath)) {
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
