import Profile from "../models/Profile";
import { useState } from "react";
import CSS from "csstype";
import "bulma/css/bulma.css";

function ProfileCard(_: {
  Profile: Profile;
  TotalLikesState: [TotalLikes: number, setTotalLikes: Function];
}): JSX.Element {
  // Profile
  const profile = _.Profile;
  let { title, tag, img } = profile.getProfile;

  // Total Likes
  const [TotalLikes, setTotalLikes] = _.TotalLikesState;
  function addLike() {
    new Promise((resolve) => {
      resolve(profile.addLike());
    })
      .catch((err) => {
        console.log("Failed to Like:", err.message);
      })
      .then((_) => {
        setTotalLikes(TotalLikes + 1);
      });
  }

  // Hover
  const [isHover, setIsHover] = useState(false);
  function alternateMouse(): void {
    setIsHover(!isHover);
  }

  // CSS
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
      <div className="card" style={card} onClick={addLike}>
        <div className="card-image" style={cardImage}>
          <figure className="image is-3by4">
            <img src={img} alt={tag} />
          </figure>
        </div>

        <header className="card-header">
          <span className="card-header-title is-size-5 is-centered">
            {title}
          </span>
        </header>

        <header className="card-header">
          <span className="card-header-title is-size-6 is-centered has-text-weight-semibold">
            {tag}
          </span>
        </header>

        <header className="card-header">
          <p
            className="card-header-title is-size-6 is-centered"
            style={likeText}
          >
            Likes: {profile.getLikes}
          </p>
        </header>
      </div>
    </div>
  );
}

export default ProfileCard;
