import React from "react";
import { If } from "react-operator";

export default function App() {
  return (
    <If
      conditions={[
        [Math.random() > 0.5, <p>wow</p>],
        [true, <p>hello</p>],
      ]}
    />
  );
}
