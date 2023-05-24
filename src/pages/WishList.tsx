import Header from "../components/Header";
import WishForm from "../components/WishForm";
import Wishes from "../components/WishList";
import WishSearch from "../components/WishSearch";
import WishValue from "../components/WishValue";

function WishList(): JSX.Element {
  return (
    <div>
      <Header />
      <div>
        <WishForm />
        <Wishes />
        <WishSearch />
        <WishValue />
      </div>
    </div>
  );
}

export default WishList;
