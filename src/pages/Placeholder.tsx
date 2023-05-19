import { useContext } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import WideButton from "../components/WideButton";
import NavigationContext from "../context/Navigation";
import { HompagePathname } from "../router/Pathnames";

/**
 * Placeholder()
 * @summary - Placeholder content.
 * @return {JSX.Element} - JSX element of Placeholder.
 */
function Placeholder(): JSX.Element {
  const { navigate } = useContext(NavigationContext)!;

  return (
    <div>
      <Header />
      <WideButton
        wideBtnClassNames="text-center w-full mx-auto"
        JSXButton={
          <Button
            btnClassNames="w-3/4 my-5 mx-auto "
            onClick={() => navigate(HompagePathname)}
            btnTextClassNames="text-xl py-5 font-semibold "
            btnText="You are not suppose to be here!"
          />
        }
      />
    </div>
  );
}

export default Placeholder;
