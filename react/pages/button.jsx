import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(0);
  return (
    <div>
      <h1>
        You have clicked the button: <strong>{clicked}</strong> times
      </h1>

      <br />

      <button
        width="64px"
        height="64px"
        onClick={() => setClicked(clicked + 1)}
      >
        click me!
      </button>
      <br />
      <br />
      <button onClick={() => setClicked(0)}>reset</button>
    </div>
  );
}
