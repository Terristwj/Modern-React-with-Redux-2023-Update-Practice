import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link(_: { to: string; children: React.ReactNode }) {
  const { navigate } = useContext(NavigationContext)!;

  function handleClick(event: React.FormEvent<HTMLAnchorElement>) {
    event.preventDefault();

    navigate(_.to);
  }

  return <a onClick={handleClick}>{_.children}</a>;
}

export default Link;
