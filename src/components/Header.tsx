import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import "bulma/css/bulma.css";
import { HonkaiStarRailPathname } from "../models/Pathnames";
import StarRailContext from "../context/StarRailProfiles";

function Header(): JSX.Element {
  let headerContent: JSX.Element;
  const { currentPath } = useContext(NavigationContext)!;

  const StarRail = useContext(StarRailContext);

  // Honkai Star Rail
  if (currentPath === HonkaiStarRailPathname) {
    headerContent = (
      <div className="hero-body">
        <p className="title">Random Weeb Project</p>
        <p className="subtitle has-text-weight-bold">
          Total Likes: {StarRail!["TotalLikesState"]["TotalLikes"]}
        </p>
      </div>
    );
  } else {
    headerContent = (
      <div className="hero-body">
        <p className="title">React Practice Project</p>
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
