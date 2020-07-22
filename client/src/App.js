import React from "react";
import "./App.css";
import Rotator from "./Rotator";

function App() {
  function pointAt(e) {
    if (e.target.name === "enhance") {
      document.getElementById("sword").classList.remove("img-left");

      document.getElementById("sword").classList.add("img-right");
    }

    if (e.target.name === "repair") {
      document.getElementById("sword").classList.remove("img-right");
      document.getElementById("sword").classList.add("img-left");
    }
  }

  return (
    <div className="App">
      <h1>Inventory</h1>
      <div className="functions">
        <button className="btn-1" name="repair" onClick={pointAt}>
          Repair
        </button>
        <button className="btn-2" name="enhance" onClick={pointAt}>
          Enhance
        </button>
      </div>

      <div className="item">
        <Rotator />
      </div>
    </div>
  );
}

export default App;
