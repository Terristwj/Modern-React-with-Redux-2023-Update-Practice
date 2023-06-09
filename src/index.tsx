/**
 *  Step 1) Import
 */
// - Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// - Import Redux Toolkit and store
import { Provider } from "react-redux";
import { store } from "./store/index";

// - Import App and CSS
import App from "./App";
import "./index.css";
import "bulma/css/bulma.css";

// - Import all Contexts
import { NavigationProvider } from "./context/Navigation";
import { StarRailProvider } from "./context/StarRailProfiles";

/**
 *  Step 2) Get a reference to the div with ID root
 */
const element = document.getElementById("root") as HTMLElement;

/**
 *  Step 3) Tell React to take control of that element
 */
const root = ReactDOM.createRoot(element);

/**
 *  Step 4) Edit/Create components in App.tsx
 */

/**
 *  Step 5) Show the component on the screen
 */
root.render(
  <Provider store={store}>
    <NavigationProvider>
      <StarRailProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StarRailProvider>
    </NavigationProvider>
  </Provider>
);
