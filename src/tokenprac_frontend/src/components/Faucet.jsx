import React, { useState } from "react";
import { tokenprac_backend } from "../../../declarations/tokenprac_backend/index";


function Faucet() {

  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme Gimme");

  async function handleClick(event) {
    setIsDisabled(true);
    const result = await tokenprac_backend.payOut();
    setButtonText(result);

  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" disabled={isDisabled} onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
