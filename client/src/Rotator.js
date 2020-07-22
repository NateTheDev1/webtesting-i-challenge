import React from "react";
import Rotation from "react-rotation";
import sword from "./images/sword.png";

class Rotator extends React.Component {
  render() {
    return <img src={sword} height={175} id="sword" />;
  }
}

export default Rotator;
