import React, { useState } from "react";

export default function Form() {
  const [fullnameInput, setFullnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          <span>Full Name:</span>
          <input
            type="text"
            name="fullname"
            value={fullnameInput}
            onChange={(e) => setFullnameInput(e.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
