import { useSelector, useDispatch } from "react-redux";
import { iWish, removeWish } from "../store/index";

/**
 * WishList()
 * @summary - Filters wishlist for any name search.
 * @return {JSX.Element} - Filtered wishlist.
 */
function WishList(): JSX.Element {
  /**
   * Retrieve data from Redux Store
   */
  const dispatch = useDispatch();
  const {
    filteredWishList,
    searchedName,
  }: {
    filteredWishList: iWish[];
    searchedName: string;
  } = useSelector(
    ({
      form,
      wishList: { wishesArray, searchTerm },
    }: {
      form: any;
      wishList: { wishesArray: iWish[]; searchTerm: string };
    }) => {
      return {
        // Excludes non search results
        filteredWishList: wishesArray.filter((wish) =>
          wish.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        ),
        searchedName: form.name,
      };
    }
  );

  /**
   * Update new wishlist into Redux Store
   */
  function handleWishDelete(wish: iWish): void {
    dispatch(removeWish(wish.id));
  }

  /**
   * Creates rendering of wishlist, after filtering
   * And checks for any existing wish
   */
  const renderWishList: JSX.Element[] = filteredWishList.map((wish: iWish) => {
    // Checks current wish name iteration if has search term
    const exists =
      searchedName &&
      wish.name.toLowerCase().includes(searchedName.toLowerCase());

    return (
      <div key={wish.id} className={`panel ${exists && "bold text-cyan-600"}`}>
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
