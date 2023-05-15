import Header from "../components/Header";
import Link from "../components/Link";
import "bulma/css/bulma.css";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Homepage(): JSX.Element {
  const { currentPath, navigate } = useContext(NavigationContext)!;

  return (
    <div>
      <Header />
      <Link to="/honkai-star-rail">Go to honkai-star-rail</Link>
      <button onClick={() => navigate("/honkai-star-rail")}>Star Rail</button>
      <button onClick={() => navigate("/starrail")}>Star Rail</button>
      {currentPath}
    </div>
  );
}

export default Homepage;
