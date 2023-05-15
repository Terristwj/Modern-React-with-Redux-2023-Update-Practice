import ProfileContainer from "../components/ProfileCardContainer";
import Header from "../components/Header";
import Profile from "../models/Profile";
import { useState } from "react";
import "bulma/css/bulma.css";

// Cannot put inside when there is a useState
// useState will force to rerun the function
const Profiles = new Profile().getProfiles();

// Initialize with 0 and then adds
let CurrentTotalLikes = 0;
Profiles.forEach((profile) => {
  CurrentTotalLikes += profile.getLikes;
});

function HonkaiStarRail(): JSX.Element {
  // No need for useState
  // const ProfilesState = useState(Profiles);

  // Tracks total likes
  const TotalLikesState = useState(CurrentTotalLikes);

  return (
    <div>
      <Header HonkaiStarRailLikes={TotalLikesState[0]} />
      <ProfileContainer TotalLikesState={TotalLikesState} Profiles={Profiles} />
    </div>
  );
}

export default HonkaiStarRail;
