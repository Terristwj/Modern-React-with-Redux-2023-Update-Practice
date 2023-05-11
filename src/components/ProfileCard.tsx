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

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>{props.title}</h1>
      <h2>{props.twitter}</h2>
    </div>
  );
}

export default ProfileCard;
