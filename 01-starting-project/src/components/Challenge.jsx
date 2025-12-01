import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function Challenge({ title, targetTime }) {
  const timerRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerStarted, setTimerStarted] = useState(false);
  const [result, setResult] = useState(null); 

  function handleStart() {
    setTimerStarted(true);
    setTimeRemaining(targetTime * 1000);

    const start = Date.now();
    timerRef.current = setInterval(() => {
      const timePassed = Date.now() - start;
      const remaining = targetTime * 1000 - timePassed;

      if (remaining <= 0) {
        clearInterval(timerRef.current);
        setTimerStarted(false);
        setResult({ success: false });
      } else {
        setTimeRemaining(remaining);
      }
    }, 10);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    setTimerStarted(false);
    setResult({ success: true, remainingTime: timeRemaining });
  }

 
  const resultData = result
    ? result.success
      ? {
          title: `YOUR SCORE: ${Math.round((1 - result.remainingTime / 1000 / targetTime) * 100)}`,
          message: `The target time was ${targetTime} seconds.\nYou stopped with ${(result.remainingTime / 1000).toFixed(2)} seconds left.`,
        }
      : {
          title: "YOU LOST",
          message: `The target time was ${targetTime} seconds.\nYou ran out of time.`,
        }
    : null;

  return (
    <>
      <ResultModal result={resultData} onClose={() => setResult(null)} />

      <article className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} seconds</p>

        {!timerStarted && <button onClick={handleStart}>Start Challenge</button>}
        {timerStarted && <button onClick={handleStop}>Stop Challenge</button>}

        <p>{timerStarted ? "Timer is running..." : "Timer inactive"}</p>
      </article>
    </>
  );
}



