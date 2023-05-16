import { useContext } from "react";
import NavigationContext from "../context/Navigation";

/**
 * @deprecated - For reference only
 */
function Link(props: { to: string; children: React.ReactNode }) {
  const { navigate } = useContext(NavigationContext)!;

  function handleClick(event: React.FormEvent<HTMLAnchorElement>) {
    event.preventDefault();

    navigate(props.to);
  }

  return <a onClick={handleClick}>{props.children}</a>;
}

export default Link;
