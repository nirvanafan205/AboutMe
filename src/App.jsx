import ReactDOM from "react-dom"; // Correct the import statement
import "./styles.css";

// serves as the root component of the application
const App = () => {
  return <h1 className="text-red-500" >Hello World</h1>;
};

// Render the app component using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));
