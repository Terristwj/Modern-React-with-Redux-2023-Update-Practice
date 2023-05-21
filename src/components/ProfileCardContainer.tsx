import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import StarRailContext from "../context/StarRailProfiles";

/**
 * ProfileCardContainer()
 * @summary - Contain and displays multiple Card-decks.
 * @return {JSX.Element} - JSX element of card-decks.
 */
function ProfileCardContainer(): JSX.Element {
  const { StarRailProfiles } = useContext(StarRailContext)!;

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

  return <div>{renderCardDeck}</div>;
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
