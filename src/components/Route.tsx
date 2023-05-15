import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import Homepage from "../pages/Homepage";

function Route(_: { path: string; children: React.ReactNode }): JSX.Element {
  const { currentPath } = useContext(NavigationContext)!;

  if (_.path === currentPath) {
    return <div>{_.children}</div>;
  }

  return <Homepage />;
}

export default Route;
