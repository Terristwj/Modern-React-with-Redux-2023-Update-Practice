import { useContext } from "react";
import Header from "../components/Header";
import NavigationContext from "../context/Navigation";
import { HompagePathname } from "../router/Pathnames";

/**
 * Placeholder()
 * @summary - Placeholder content
 * @return {JSX.Element} - JSX element of Placeholder.
 */
function Placeholder(): JSX.Element {
  const { navigate } = useContext(NavigationContext)!;

  return (
    <div>
      <Header />
      <div className="text-center w-full mx-auto">
        <button
          className="p-5 w-3/4 my-10 mx-auto border-8 border-blue-200"
          onClick={() => navigate(HompagePathname, true)}
        >
          <p className="text-xl">You are not suppose to be here!</p>
        </button>
      </div>
    </div>
  );
}

export default Placeholder;
