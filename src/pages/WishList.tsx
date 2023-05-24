import Header from "../components/Header";
import WishForm from "../components/WishForm";
import Wishes from "../components/WishList";
import WishSearch from "../components/WishSearch";
import WishValue from "../components/WishValue";

/**
 * WishList()
 * @summary - WishList content.
 * @return {JSX.Element} - JSX element of WishList.
 */
function WishList(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="container is-fluid">
        <WishForm />
        <WishSearch />
        <Wishes />
        <WishValue />
      </div>
    </div>
  );
}

export default WishList;
