import Router from "./router/Router";

/**
 * App()
 * @summary - Checks current path and displays corresponding content.
 * @return {JSX.Element} - JSX element Router with content.
 */
function App(): JSX.Element {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;

/**
 * Alternate approach without Route React component
 */
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
