/**
 * Import all pages here
 */
import HonkaiStarRail from "../pages/HonkaiStarRail";

/**
 * Export all individual pathnames here
 */
export const HonkaiStarRailPathname = "/honkai-star-rail";

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
    { webpage: "Honkai Star Rail", page: HonkaiStarRail() },
  ],
]);
export default PathnameToPage;
