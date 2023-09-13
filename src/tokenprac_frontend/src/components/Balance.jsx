import React from "react";
import { useState } from "react";
import { tokenprac_backend } from "../../../declarations/tokenprac_backend/index";
import { Principal } from "@dfinity/principal"
function Balance() {

  const [inputValue, setInputValue] = useState("");
  const [balanceResult, setBalance] = useState("");
  const [symbol, setSymbol] = useState("");
  const [hidden, setHidden] = useState(true);

  async function handleClick() {
    console.log(inputValue);

    const principal = Principal.fromText(inputValue);
    const balance = await tokenprac_backend.balanceOf(principal);
    setBalance(balance.toLocaleString());
    setSymbol(await tokenprac_backend.getSymbol());
    setHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={hidden}>This account has a balance of {balanceResult} {symbol}.</p>
    </div>
  );
}

export default Balance;
