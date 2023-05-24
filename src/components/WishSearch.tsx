import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/index";

/**
 * WishSearch()
 * @summary - Search bar.
 * @return {JSX.Element} - Search bar.
 */
function WishSearch(): JSX.Element {
  /**
   * Retrieve data from Redux Store
   */
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => {
    return state.wishList.searchTerm;
  });

  /**
   * Update new search term into Redux Store
   */
  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(changeSearchTerm(event.target.value));
  }

  return (
    <div className="list-header">
      <h3 className="title is-3">My Wish List</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default WishSearch;
