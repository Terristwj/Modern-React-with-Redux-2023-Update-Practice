import { useContext } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import NavigationContext from "../context/Navigation";
import PathnameToPage, { HompagePathname } from "../router/Pathnames";

/**
 * Homepage()
 * @summary - Contain and display Homepage React components.
 * @return {JSX.Element} - JSX element of Homepage.
 */
function Homepage(): JSX.Element {
  const { navigate } = useContext(NavigationContext)!;

  /**
   * Configures button appearance
   * Auto retrieves from "../router/Pathnames"
   */
  let buttons: JSX.Element[] = [];
  [...PathnameToPage.keys()].forEach((pathname: string, index: number) => {
    // Avoids adding button for homepage
    if (pathname !== HompagePathname) {
      buttons.push(
        <Button
          key={index}
          btnClassNames="relative inline-flex mb-2 mr-2 "
          onClick={() => navigate(pathname)}
          btnTextClassNames="px-5 py-2.5 text-sm "
          btnText={PathnameToPage.get(pathname)!.title}
        />
      );
    }
  });

  // Add button for each page here
  return (
    <div>
      <Header />
      <div className="p-5 space-y-2">{buttons}</div>
    </div>
  );
}

export default Homepage;
