/**
 * Import all pages here
 */
import HonkaiStarRail from "../pages/HonkaiStarRail";
import Placeholder from "../pages/Placeholder";

/**
 * Export all individual pathnames here
 */
export const HonkaiStarRailPathname = "/honkai-star-rail";
export const HompagePathname = "/Modern-React-with-Redux-2023-Update-Practice";
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
  webpage: string;
  page: JSX.Element;
};

const PathnameToPage = new Map<string, Page>([
  [
    HonkaiStarRailPathname,
    { webpage: "Honkai Star Rail", page: <HonkaiStarRail /> },
  ],
  [Placeholder1, { webpage: "Placeholder 1", page: <Placeholder /> }],
  [Placeholder2, { webpage: "Placeholder 2", page: <Placeholder /> }],
  [Placeholder3, { webpage: "Placeholder 3", page: <Placeholder /> }],
  [Placeholder4, { webpage: "Placeholder 4", page: <Placeholder /> }],
  [Placeholder5, { webpage: "Placeholder 5", page: <Placeholder /> }],
  [Placeholder6, { webpage: "Placeholder 6", page: <Placeholder /> }],
  [Placeholder7, { webpage: "Placeholder 7", page: <Placeholder /> }],
]);
export default PathnameToPage;
