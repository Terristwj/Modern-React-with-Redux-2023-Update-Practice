import HonkaiStarRail from "./pages/HonkaiStarRail";
import Route from "./components/Route";
import { HonkaiStarRailPathname } from "./models/Pathnames";

function App(): JSX.Element {
  return (
    <div>
      <Route path={HonkaiStarRailPathname}>
        <HonkaiStarRail />
      </Route>
    </div>
  );
}

export default App;

// const currentPath = window.location.pathname;
// let currentPage: JSX.Element;

// const { navigate } = useContext(NavigationContext)!;
// const navigationButtons: JSX.Element = (
//   <div>
//     <button onClick={() => navigate("/honkai-star-rail")}>Star Rail</button>
//     <button onClick={() => navigate("/starrail")}>Star Rail</button>
//     {currentPath[0]}
//   </div>
// );

// // Redirects
// if (currentPath === "/honkai-star-rail") {
//   currentPage = <HonkaiStarRail />;
// } else {
//   currentPage = (
//     <div>
//       <Header />
//       <Link to="/honkai-star-rail">Go to honkai-star-rail</Link>
//       {navigationButtons}
//     </div>
//   );
// }
