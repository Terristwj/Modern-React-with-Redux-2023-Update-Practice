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
  const [TotalLikes, setTotalLikes] = _.TotalLikesState;
  function addWaifu() {
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

  const cardStyle: CSS.Properties = {
    textAlign: "center",
    flex: 1,
    border: isHover ? "1px solid grey" : "1px solid black",
    borderRadius: "3px",
    margin: isHover ? "0.8em" : "1em",
    cursor: "default",
    transitionDuration: "0.5s",
    background: isHover ? "rgb(227, 225, 225)" : "white",
  };

  let { title, tag, img } = profile.getProfile;

  return (
    <div
      className="column is-3"
      style={cardStyle}
      onMouseEnter={alternateMouse}
      onMouseLeave={alternateMouse}
      onClick={addWaifu}
    >
      <div className="card" style={{ cursor: "pointer" }}>
        <div
          className="card-image"
          style={{ borderBottom: "1.5px solid black" }}
        >
          <figure className="image is-3by4">
            <img src={img} alt={tag} />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-4 has-text-weight-bold ">{title}</p>
          <p className="subtitle is-5">{tag}</p>
          <p className="title is-6">Likes: {profile.getLikes}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
