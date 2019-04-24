import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenyouInfo from "./components/venyouInfo";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "cadetBlue" }}>
        <Header />
        <Featured />
        <VenyouInfo />
      </div>
    );
  }
}

export default App;
