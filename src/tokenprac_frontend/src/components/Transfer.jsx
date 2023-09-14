import React, { useState } from "react";
import { tokenprac_backend } from "../../../declarations/tokenprac_backend/index";
import { Principal } from "@dfinity/principal";


function Transfer() {

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [buttonText, setText] = useState("transfer");
  const [isDisabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [feedback, setFeedback] = useState("");



  async function handleClick() {
    setHidden(true);
    setDisabled(true);
    const recipient = Principal.fromText(to);
    const amountToTransfer = Number(amount);
    const result = await tokenprac_backend.transfer(recipient, amountToTransfer);
    setText(result);
    setHidden(false);
    setFeedback(result);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={to}
                onChange={(e) => { setTo(e.target.value) }}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => { setAmount(e.target.value) }}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled} >
            Transfer
          </button>
        </p>
        <p hidden={hidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
