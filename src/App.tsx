import React from "react";
import logo from "./logo.svg";
import { ethers } from "ethers";
import "./App.css";
//@ts-expect-error
import { Voting__factory } from "@uma/core/contract-types/ethers";
const Voting = Voting__factory.connect(
  "some address",
  ethers.getDefaultProvider()
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre>
          <code>{JSON.stringify({ Voting }, null, 2)}</code>
        </pre>
      </header>
    </div>
  );
}

export default App;
