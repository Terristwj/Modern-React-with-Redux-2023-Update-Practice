import ProfileContainer from "./components/ProfileCardContainer";
import Header from "./components/Header";
import Profile from "./models/Profile";
import { useState } from "react";

// Cannot put inside when there is a useState
// useState will force to rerun the function
const Profiles = new Profile().getProfiles();

let CurrentTotalLikes = 0;
Profiles.forEach((profile) => {
  CurrentTotalLikes += profile.getLikes;
});

function App(): JSX.Element {
  // No need for useState
  // const ProfilesState = useState(Profiles);
  const TotalLikesState = useState(CurrentTotalLikes);

  return (
    <div>
      <Header TotalLikes={TotalLikesState[0]} />
      <ProfileContainer TotalLikesState={TotalLikesState} Profiles={Profiles} />
    </div>
  );
}

export default App;
