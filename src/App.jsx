import React from "react";
import ReactDOM from "react-dom";
import StarryNight from "./components/Stars";
import Landing from "./components/landingPage"; // Import statement is correct
import NavBar from "./components/NavBar";
import "./styles.css";

const App = () => {
  return  (
    <StarryNight>
      <NavBar />
      <Landing />
    </StarryNight>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));