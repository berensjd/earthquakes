import React from "react";
import ReactDOM from "react-dom";
import Earthquakes from "./earthquakes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Earthquakes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
