import Header from "../components/Header";
import RefreshProfiles from "../components/RefreshProfiles";
import Table from "../components/Table";

/**
 * TablePage()
 * @summary - TablePage content.
 * @return {JSX.Element} - JSX element of TablePage.
 */
function TablePage(): JSX.Element {
  return (
    <div>
      <Header />
      <RefreshProfiles />
      <Table name="HonkaiStarRail" />
    </div>
  );
}

export default TablePage;
