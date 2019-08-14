import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
        <Header />
        <Body />
        <Footer />
      </p>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);