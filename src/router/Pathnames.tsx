/**
 * Import all pages here
 */
import Homepage from "../pages/Homepage";
import HonkaiStarRail from "../pages/HonkaiStarRail";
import Placeholder from "../pages/Placeholder";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";
import WishList from "../pages/WishList";

/**
 * Export all individual pathnames here
 */
export const HonkaiStarRailPathname = "/Honkai-Star-Rail";
export const HompagePathname = "/Modern-React-with-Redux-2023-Update-Practice/";
export const ModalPathname = "/Modal";
export const TablePathname = "/Table";
export const WishListPathname = "/WishList";
export const Placeholder1 = "/Placeholder1";
export const Placeholder2 = "/Placeholder2";
export const Placeholder3 = "/Placeholder3";
export const Placeholder4 = "/Placeholder4";
export const Placeholder5 = "/Placeholder5";
export const Placeholder6 = "/Placeholder6";
export const Placeholder7 = "/Placeholder7";

/**
 * Tracks pathname to corresponding page
 */
type Page = {
  title: string;
  page: JSX.Element;
};

const PathnameToPage = new Map<string, Page>([
  [HompagePathname, { title: "Terris' React Practice", page: <Homepage /> }],
  [
    HonkaiStarRailPathname,
    { title: "Honkai Star Rail", page: <HonkaiStarRail /> },
  ],
  [ModalPathname, { title: "A Simple Modal", page: <ModalPage /> }],
  [TablePathname, { title: "A Table", page: <TablePage /> }],
  [WishListPathname, { title: "Hopes & Dreams", page: <WishList /> }],
  [Placeholder1, { title: "Placeholder 1", page: <Placeholder /> }],
  [Placeholder2, { title: "Placeholder 2", page: <Placeholder /> }],
  [Placeholder3, { title: "Placeholder 3", page: <Placeholder /> }],
  [Placeholder4, { title: "Placeholder 4", page: <Placeholder /> }],
  [Placeholder5, { title: "Placeholder 5", page: <Placeholder /> }],
  [Placeholder6, { title: "Placeholder 6", page: <Placeholder /> }],
  [Placeholder7, { title: "Placeholder 7", page: <Placeholder /> }],
]);
export default PathnameToPage;
