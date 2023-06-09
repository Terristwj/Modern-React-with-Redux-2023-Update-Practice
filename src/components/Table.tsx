import { useContext } from "react";
import StarRailContext from "../context/StarRailProfiles";
import Profile from "../models/Profile";

/**
 * Table()
 * @summary - Displays Table based on 'name'.
 * @return {JSX.Element} - JSX element of Table.
 */
function Table(props: { name: string }): JSX.Element {
  /**
   * Table renders
   */
  let renderTableHeaders: JSX.Element[] = [];
  let renderTableRows: JSX.Element[] = [];

  /**
   * Table Tailwind CSS
   */
  const { thClassNames, trClassNames, tdClassNames } = getClassNames();

  /**
   * Retrieve corresponding Table Data
   */
  const { StarRailProfiles, TotalLikesState } = useContext(StarRailContext)!;
  if (props.name === "HonkaiStarRail") {
    /**
     * Render table headers
     */
    Object.keys(StarRailProfiles[0].getProfile).forEach((key: string) => {
      renderTableHeaders.push(
        <th key={key} className={thClassNames}>
          {key}
        </th>
      );
    });

    /**
     * Render table data rows
     */
    StarRailProfiles.forEach((Profile: Profile) => {
      const { Title, Tag, Img, Likes } = Profile.getProfile;
      const Alt = Img.split("/").at(-1)!;

      renderTableRows.push(
        <tr key={Tag} className={trClassNames}>
          <td className={tdClassNames}>{Title}</td>
          <td className={tdClassNames}>{Tag}</td>
          <td className={tdClassNames}>
            <img
              className="p-[0.1em] w-6/12 min-w-[2.5em] max-w-[20em] m-auto duration-300 cursor-pointer hover:w-8/12"
              onClick={() => Profile.addLike(TotalLikesState)}
              src={Img}
              alt={Alt}
            />
          </td>
          <td className={tdClassNames}>{Likes}</td>
        </tr>
      );
    });
  }

  return (
    <table className="mx-auto my-5">
      <thead>
        <tr className="text-center border-b-2 border-b-indigo-600">
          {renderTableHeaders}
        </tr>
      </thead>
      <tbody>{renderTableRows}</tbody>
    </table>
  );
}

/**
 * Table Tailwind CSS
 */
function getClassNames(): {
  thClassNames: string;
  trClassNames: string;
  tdClassNames: string;
} {
  return {
    thClassNames: "first-letter:capitalize pb-2",
    trClassNames: "duration-100 hover:font-bold hover:bg-slate-100",
    tdClassNames: "align-middle px-[0.5em]",
  };
}

export default Table;
