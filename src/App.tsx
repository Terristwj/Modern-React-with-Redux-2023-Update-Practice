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

// Router Redirection
// window.history.pushState({}, "", "/<path>");
// Dont use
// window.location = "<url>";

// Rewriting Default Browser href Navigation
// event.preventDefault();
// Debugging Default Browser back/forward Navigation
// window.addEventListener("popstate", () => console.log("Im at", window.location.pathname));


