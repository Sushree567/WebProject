import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit() {
    setSubmittedName(playerName);
  }

  return (
    <section id="player">
      <h2>Welcome {submittedName ? submittedName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          placeholder="Enter name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

