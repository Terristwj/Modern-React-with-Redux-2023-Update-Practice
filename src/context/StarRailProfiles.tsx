import { createContext, useState } from "react";
import Profile from "../models/Profile";

/**
 * StarRailType type properties
 * @property {Profile[]} StarRailProfiles - Tracks profiles.
 * @property {number} TotalLikesState.TotalLikes - Total likes of all profiles.
 * @property {Function} TotalLikesState.setTotalLikes - Function to change total likes.
 */
type StarRailType = {
  StarRailProfiles: Profile[];
  TotalLikesState: { TotalLikes: number; setTotalLikes: Function };
};

/** @global */
const StarRailContext = createContext<StarRailType | null>(null);

/** @global */
/**
 * Never place in same scope as a useState
 * - useState forces function to rerun
 */
const StarRailProfiles = new Profile().getProfiles();

/** @global */
/**
 * Initialize with 0 then totals profile likes
 */
let CurrentTotalLikes = 0;
StarRailProfiles.forEach((profile) => {
  CurrentTotalLikes += profile.getLikes;
});

/**
 * Settings for StarRailProvider React component
 * @summary - Retains StarRailProfiles and CurrentTotalLikes when rerendering redirects.
 * @param {{React.ReactNode}} props.children - Sub React components.
 * @return {JSX.Element} - JSX element with parsing values and children.
 */
function StarRailProvider(props: { children: React.ReactNode }): JSX.Element {
  // Tracks total likes
  const [TotalLikes, setTotalLikes] = useState(CurrentTotalLikes);
  const TotalLikesState = { TotalLikes, setTotalLikes };

  return (
    <StarRailContext.Provider value={{ StarRailProfiles, TotalLikesState }}>
      {props.children}
    </StarRailContext.Provider>
  );
}

export { StarRailProvider };
export default StarRailContext;
