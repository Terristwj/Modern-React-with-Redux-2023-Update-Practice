import { useSelector, useDispatch } from "react-redux";
import { iWish, removeWish } from "../store/slices/WishListSlice";

function WishList(): JSX.Element {
  const dispatch = useDispatch();
  const wishList: iWish[] = useSelector((state: any) => {
    return state.wishList.wishesArray;
  });

  function handleWishDelete(wish: iWish) {
    dispatch(removeWish(wish.id));
  }

  const renderWishList: JSX.Element[] = wishList.map((wish: iWish) => {
    return (
      <div key={wish.id} className="panel">
        <p>
          {wish.name} - ${wish.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleWishDelete(wish)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="wish-list">
      {renderWishList}
      <hr />
    </div>
  );
}

export default WishList;
