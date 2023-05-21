import CSS from "csstype";
import { useState, useContext } from "react";
import StarRailContext from "../context/StarRailProfiles";
import Profile from "../models/Profile";

/**
 * ProfileCard()
 * @summary - Contain and display profile card.
 * @param - Honkai Star Rail Profile to make a card
 * @return {JSX.Element} - JSX element of card template.
 */
function ProfileCard(props: { Profile: Profile }): JSX.Element {
  /**
   * Total Likes
   */
  const { TotalLikesState } = useContext(StarRailContext)!;

  /**
   * Profile properties
   */
  const Profile: Profile = props.Profile;
  const { Title, Tag, Img } = Profile.getProfile;

  /**
   * Hover
   */
  const [isHover, setIsHover] = useState(false);
  function alternateMouse(): void {
    setIsHover(!isHover);
  }

  /**
   * CSS Styles
   */
  const column: CSS.Properties = {
    textAlign: "center",
    padding: isHover ? "0em 0em" : "",
    cursor: "default",
    transitionDuration: "0.5s",
    // background: isHover ? "rgb(227, 225, 225)" : "white",
    // boxShadow: isHover ? "5px 5px #23adff inset, 0px 0px 15px #23adff" : "none",
    boxShadow: isHover
      ? "5px 5px #e6f6ff inset, 0px 0px 15px 10px #e6f6ff"
      : "none",
  };
  const card: CSS.Properties = {
    border: isHover ? "1.5px solid #4dbeff" : "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const cardImage: CSS.Properties = {
    borderBottom: isHover ? "3px solid #99daff" : "1.5px solid black",
  };
  const likeText: CSS.Properties = {
    fontWeight: isHover ? "bold" : "normal",
  };

  // JSX
  return (
    <div
      className="column is-3"
      style={column}
      onMouseEnter={alternateMouse}
      onMouseLeave={alternateMouse}
    >
      <div
        className="card"
        style={card}
        onClick={() => Profile.addLike(TotalLikesState)}
      >
        <div className="card-image" style={cardImage}>
          <figure className="image is-3by4">
            <img src={Img} alt={Tag} />
          </figure>
        </div>

        <header className="card-header">
          <span className="card-header-title is-size-5 is-centered">
            {Title}
          </span>
        </header>

        <header className="card-header">
          <span className="card-header-title is-size-6 is-centered has-text-weight-semibold">
            {Tag}
          </span>
        </header>

        <header className="card-header">
          <p
            className="card-header-title is-size-6 is-centered"
            style={likeText}
          >
            Likes: {Profile.getLikes}
          </p>
        </header>
      </div>
    </div>
  );
}

export default ProfileCard;
