import ProfileCard from "./ProfileCard";
import Profile from "../models/Profile";
import "bulma/css/bulma.css";

function ProfileCardContainer(_: {
  TotalLikes: [TotalLikes: number, setTotalLikes: Function];
  Profiles: Profile[];
}): JSX.Element {
  let profilesContainer: JSX.Element[] = [];
  _.Profiles.forEach((profile) => {
    profilesContainer.push(
      <ProfileCard
        key={profile.getTag}
        Profile={profile}
        TotalLikes={_.TotalLikes}
      />
    );
  });

  return (
    <div className="container">
      <section className="section">
        <div className="card columns">{profilesContainer}</div>
      </section>
    </div>
  );
}

export default ProfileCardContainer;
