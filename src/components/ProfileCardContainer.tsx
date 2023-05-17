import "bulma/css/bulma.css";
import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import StarRailContext from "../context/StarRailProfiles";
import Profile from "../models/Profile";

/**
 * ProfileCardContainer()
 * @summary - Contain and displays multiple Card-decks.
 * @return {JSX.Element} - JSX element of card-decks.
 */
function ProfileCardContainer(): JSX.Element {
  const { StarRailProfiles, refreshProfiles } = useContext(StarRailContext)!;

  // Refresh button
  function handleRefreshProfiles() {
    refreshProfiles(new Profile().getProfiles());
  }

  /**
   * Foreach profile, create a card and display in a card-deck.
   * Each card-deck holds max 4 cards.
   * Retrieves data from "models/Profile"
   */
  let renderCardDeck: JSX.Element[] = [];
  let profileCards: JSX.Element[] = [];

  for (let i = 1; i <= StarRailProfiles.length; i++) {
    // Create a card
    profileCards.push(
      <ProfileCard key={i} Profile={StarRailProfiles[i - 1]} />
    );

    // Create a card-deck with 1-4 cards
    if (i % 4 === 0 || i === StarRailProfiles.length) {
      renderCardDeck.push(
        createDeckTemplate(renderCardDeck.length + 1, profileCards)
      );
      profileCards = [];
    }
  }

  return (
    <div>
      <button
        className="button is-info is-light  is-fullwidth "
        onClick={handleRefreshProfiles}
      >
        Refresh
      </button>
      <div>{renderCardDeck}</div>
    </div>
  );
}

function createDeckTemplate(
  i: number,
  ProfileCards: JSX.Element[]
): JSX.Element {
  return (
    <section key={i} className="section">
      <div className="card columns">{ProfileCards}</div>
    </section>
  );
}

export default ProfileCardContainer;
