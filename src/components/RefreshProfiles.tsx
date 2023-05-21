import { useContext } from "react";
import StarRailContext from "../context/StarRailProfiles";
import Profile from "../models/Profile";

/**
 * RefreshProfiles()
 * @summary - Refresh profiles of Honkai Characters.
 * @return {JSX.Element} - JSX element of RefreshProfiles.
 */
function RefreshProfiles(): JSX.Element {
  const { refreshProfiles } = useContext(StarRailContext)!;

  // Refresh button
  function handleRefreshProfiles() {
    refreshProfiles(new Profile().getProfiles());
  }

  return (
    <button
      className="button is-info is-light  is-fullwidth "
      onClick={handleRefreshProfiles}
    >
      Refresh
    </button>
  );
}

export default RefreshProfiles;
