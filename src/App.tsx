import React from "react";
import logo from "./logo.svg";
import { ethers } from "ethers";
import "./App.css";
import { EthersContracts } from "@uma/core";
const { Voting__factory } = EthersContracts;
const Voting = Voting__factory.connect(
  "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
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
