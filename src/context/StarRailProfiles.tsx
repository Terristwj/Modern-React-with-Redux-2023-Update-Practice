import Profile from "../models/Profile";
import { createContext, useState } from "react";

type StarRailType = {
  StarRailProfiles: Profile[];
  TotalLikesState: { TotalLikes: number; setTotalLikes: Function };
};

const StarRailContext = createContext<StarRailType | null>(null);

// Cannot put inside when there is a useState
// useState will force to rerun the function
const StarRailProfiles = new Profile().getProfiles();

// Initialize with 0 and then adds
let CurrentTotalLikes = 0;
StarRailProfiles.forEach((profile) => {
  CurrentTotalLikes += profile.getLikes;
});

function StarRailProvider(_: { children: React.ReactNode }): JSX.Element {
  // Tracks total likes
  const [TotalLikes, setTotalLikes] = useState(CurrentTotalLikes);
  const TotalLikesState = { TotalLikes, setTotalLikes };

  // Listens for popstate event
  return (
    <StarRailContext.Provider value={{ StarRailProfiles, TotalLikesState }}>
      {_.children}
    </StarRailContext.Provider>
  );
}

export { StarRailProvider };
export default StarRailContext;
