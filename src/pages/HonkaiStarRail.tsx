import Header from "../components/Header";
import ProfileContainer from "../components/ProfileCardContainer";
import RefreshProfiles from "../components/RefreshProfiles";

/**
 * HonkaiStarRail()
 * @summary - Contain and display HonkaiStarRail React components.
 * @return {JSX.Element} - JSX element of HonkaiStarRail.
 */
function HonkaiStarRail(): JSX.Element {
  return (
    <div>
      <Header />
      <RefreshProfiles />
      <ProfileContainer />
    </div>
  );
}

export default HonkaiStarRail;
