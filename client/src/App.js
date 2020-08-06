import React, { useState } from "react";
import "./App.css";
import Rotator from "./Rotator";

function App() {
  const [sword, setSword] = useState({
    initialName: "Iron Sword",
    name: "Iron Sword",
    durability: 63,
    enhancement: 0,
  });

  const [coins, setCoins] = useState(100);

  const [error, setError] = useState("");

  function get() {
    if (sword.enhancement > 0) {
      setSword({
        ...sword,
        name: `[+${sword.enhancement}] ${sword.initialName}`,
      });
    } else {
      setSword({ ...sword, name: sword.initialName });
    }
  }

  function success() {
    if (sword.enhancement !== 20) {
      setSword({ ...sword, enhancement: sword.enhancement++ });
    }
    get();
  }

  function fail() {
    if (sword.enhancement < 15) {
      if (sword.enhancement > 5) {
        console.log("Here < 5");
        setSword({ ...sword, enhancement: (sword.enhancement -= 5) });
      } else if (sword.enhancement > 0) {
        console.log("Here < 5");
        setSword({ ...sword, enhancement: sword.enhancement-- });
      } else {
        setSword({ ...sword, enhancement: 0 });
      }
    } else if (sword.enhancement > 15 && sword.enhancement <= 16) {
      setSword({ ...sword, enhancement: (sword.enhancement -= 10) });
    } else if (sword.enhancement > 16) {
      setSword({ ...sword, enhancement: sword.enhancement-- });
    }

    get();
  }

  function repair() {
    setSword({ ...sword, durability: 100 });
  }

  function pointAt(e) {
    if (e.target.name === "enhance") {
      const decision = Math.floor(Math.random() * 10);

      if (coins > 10) {
        if (decision < 5) {
          console.log("Fail");
          fail();
        } else if (decision > 5) {
          console.log("success");
          success();
        }
        document.getElementById("sword").classList.remove("img-left");

        document.getElementById("sword").classList.add("img-right");

        setCoins(coins - 10);
      } else {
        setError("Not Enough Coins!");

        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }

    if (e.target.name === "repair") {
      if (coins > 5 && sword.durability < 100) {
        setCoins(coins - 5);
        document.getElementById("sword").classList.remove("img-right");
        document.getElementById("sword").classList.add("img-left");
        repair();
      } else {
        if (!sword.durability < 100) {
          setError("Durability is already at 100");
        } else {
          setError("Not Enough Coins");
        }

        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1>Inventory</h1>
        {error.length > 0 && (
          <p style={{ color: "red", fontSize: "1.3rem" }}>{error}</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ textAlign: "center", color: "yellow", fontSize: "2rem" }}>
            Coins: {coins}
          </p>
          <i
            className="fas fa-coins"
            style={{
              color: "yellow",
              marginLeft: "2%",
              fontSize: "2rem",
            }}
          ></i>
        </div>
      </div>
      <div className="functions">
        <button className="btn-1" name="repair" onClick={pointAt}>
          Repair - 5
        </button>
        <button className="btn-2" name="enhance" onClick={pointAt}>
          Enhance - 10
        </button>
      </div>

      <div className="item">
        <Rotator />
      </div>

      <div className="stats">
        <h2>Stats Chart</h2>
        <p>{sword.name}</p>
        <div className="stat-container">
          <div className="durability">
            <p>Durability: {sword.durability}</p>
            <i
              class="fas fa-heart"
              style={{ marginLeft: "10px", color: "red", fontSize: "2rem" }}
            ></i>
          </div>
          <div className="durability">
            <p>Enhancement: {sword.enhancement}</p>
            <i
              className="fas fa-magic"
              style={{ marginLeft: "10px", color: "green", fontSize: "2rem" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
