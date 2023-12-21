import ReactDOM from "react-dom"; // Correct the import statement
import StarryNight from "./components/Stars";
import "./styles.css";

// serves as the root component of the application
const App = () => {
  return (
    <div>
      <StarryNight></StarryNight>
    </div>
  ) 
};

// Render the app component using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));
