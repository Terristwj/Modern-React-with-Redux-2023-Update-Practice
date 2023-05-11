import CSS from "csstype";
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
    border: "1px solid black",
    margin: "2em",
    cursor: "default",
    transitionDuration: "0.5s",
    background: isHover ? "rgb(227, 225, 225)" : "white",
  };

  const imgStyle: CSS.Properties = {
    width: "100%",
    aspectRatio: "0.7",
  };

  const descStyle: CSS.Properties = {
    paddingTop: "10px",
    paddingBottom: "20px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img style={imgStyle} src={props.img} alt={props.tag} />
      <div style={descStyle}>
        <label style={{ fontSize: "2.5vw", fontWeight: "bold" }}>
          {props.title}
        </label>
        <br />
        <label style={{ fontSize: "2vw" }}>{props.tag}</label>
      </div>
    </div>
  );
}

export default ProfileCard;
