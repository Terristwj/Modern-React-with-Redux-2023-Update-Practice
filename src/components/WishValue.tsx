import { useSelector } from "react-redux";
import { iWish } from "../store/index";

/**
 * WishValue()
 * @summary - Derives final cost.
 * @return {JSX.Element} - Display final cost.
 */
function WishValue(): JSX.Element {
  /**
   * Retrieve data from Redux Store
   * Derives total cost from the data
   */
  const totalCost: number = useSelector(
    ({
      wishList: { wishesArray, searchTerm },
    }: {
      wishList: { wishesArray: iWish[]; searchTerm: string };
    }) => {
      return wishesArray
        .filter((wish) =>
          wish.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((totalCost, wish) => totalCost + wish.cost, 0);
    }
  );

  return <div className="wish-value">Total Cost: ${totalCost}</div>;
}

export default WishValue;
