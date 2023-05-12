import CSS from "csstype";
import "bulma/css/bulma.css";
import { useState } from "react";
import Profile from "../models/ProfileCard";

function ProfileCard(props: Profile): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter(): void {
    setIsHover(true);
  }
  function handleMouseLeave(): void {
    setIsHover(false);
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

  return (
    <div className="column is-3">
      <div
        className="card"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="card-image"
          style={{ borderBottom: "1.5px solid black" }}
        >
          <figure className="image is-3by4">
            <img src={props.img} alt={props.tag} />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-4 has-text-weight-bold ">{props.title}</p>
          <p className="subtitle is-6">{props.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
