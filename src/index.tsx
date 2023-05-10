// Step 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Step 2) Get a reference to the div with ID root
const element = document.getElementById("root") as HTMLElement;

// Step 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element);

// Step 4) Create a component
function App() {
  const msg: string = "Hello there!";
  return (
    <div>
      <h1>{msg}</h1>
      <textarea autoFocus />
    </div>
  );
}

// Step 5) Show the component on the screen
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
