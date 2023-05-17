import { createContext, useState } from "react";
import Profile from "../models/Profile";

/**
 * StarRailType type properties
 * @property {Profile[]} StarRailProfiles - Tracks profiles.
 * @property {Object} TotalLikesState
 * @property {number} TotalLikesState.TotalLikes - Total likes of all profiles.
 * @property {Function} TotalLikesState.setTotalLikes - Function to change total likes.
 * @property {Function} refreshProfiles - Refresh profile likes and total likes
 */
type StarRailType = {
  StarRailProfiles: Profile[];
  TotalLikesState: { TotalLikes: number; setTotalLikes: Function };
  refreshProfiles: Function;
};

/** @global */
const StarRailContext = createContext<StarRailType | null>(null);

/** @global */
/**
 * Never place in same scope as a useState
 * - useState forces function to rerun
 */
const CurrentStarRailProfiles = new Profile().getProfiles();

/** @global */
/**
 * Initialize with 0 then totals profile likes
 */
let currentTotalLikes = getCurrentTotalLikes(CurrentStarRailProfiles);
function getCurrentTotalLikes(StarRailProfiles: Profile[]): number {
  let totalLikes = 0;
  StarRailProfiles.forEach((profile) => {
    totalLikes += profile.getLikes;
  });
  return totalLikes;
}

/**
 * Settings for StarRailProvider React component
 * @summary - Retains StarRailProfiles and CurrentTotalLikes when rerendering redirects.
 * @param {{React.ReactNode}} props.children - Sub React components.
 * @return {JSX.Element} - JSX element with parsing values and children.
 */
function StarRailProvider(props: { children: React.ReactNode }): JSX.Element {
  // Tracks total likes
  const [TotalLikes, setTotalLikes] = useState(currentTotalLikes);
  const TotalLikesState = { TotalLikes, setTotalLikes };

  // Tracks profiles
  const [StarRailProfiles, setStarRailProfilesState] = useState(
    CurrentStarRailProfiles
  );

  // Refresh profiles and total likes
  function refreshProfiles(updatedStarRailProfiles: Profile[]): void {
    setStarRailProfilesState(updatedStarRailProfiles);
    setTotalLikes(getCurrentTotalLikes(updatedStarRailProfiles));
  }

  return (
    <StarRailContext.Provider
      value={{ StarRailProfiles, TotalLikesState, refreshProfiles }}
    >
      {props.children}
    </StarRailContext.Provider>
  );
}

export { StarRailProvider };
export default StarRailContext;
