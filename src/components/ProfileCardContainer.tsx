import ProfileCard from "./ProfileCard";
import Profile from "../models/Profile";
import "bulma/css/bulma.css";
import StarRailContext from "../context/StarRailProfiles";
import { useContext } from "react";

function ProfileCardContainer(): JSX.Element {
  const { StarRailProfiles } = useContext(StarRailContext)!;

  // Creates card template foreach profile
  const renderProfiles = StarRailProfiles.map(
    (profile: Profile, index: number) => {
      return <ProfileCard key={index} Profile={profile} />;
    }
  );

  return (
    <div className="container">
      <section className="section">
        <div className="card columns">{renderProfiles}</div>
      </section>
    </div>
  );
}

export default ProfileCardContainer;
