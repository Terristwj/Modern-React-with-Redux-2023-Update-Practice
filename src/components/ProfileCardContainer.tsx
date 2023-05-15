import ProfileCard from "./ProfileCard";
import Profile from "../models/Profile";
import "bulma/css/bulma.css";

function ProfileCardContainer(_: {
  TotalLikesState: [TotalLikes: number, setTotalLikes: Function];
  Profiles: Profile[];
}): JSX.Element {
  // Creates card template foreach profile
  const renderProfiles = _.Profiles.map((profile, index) => {
    return (
      <ProfileCard
        key={index}
        Profile={profile}
        TotalLikesState={_.TotalLikesState}
      />
    );
  });

  return (
    <div className="container">
      <section className="section">
        <div className="card columns">{renderProfiles}</div>
      </section>
    </div>
  );
}

export default ProfileCardContainer;
