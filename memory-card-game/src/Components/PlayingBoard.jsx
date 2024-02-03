import { useState } from "react";
import CardDeck from "./CardDeck";

export default function PlayingBoard({
  highScore,
  setHighScore,
  curScore,
  setCurScore,
  isPlaying,
  setIsPlaying,
}) {
  const [numberCard, setNumberCard] = useState(1);
  const [result, setResult] = useState(0);
  // 1 is winning
  // 2 is loosing

  function handleClick() {
    if (numberCard >= 1 && numberCard <= 52) {
      setResult(0);
      setCurScore(0);
      setIsPlaying(true);
    } else {
      alert("Please input a number in range of 1 to 52");
    }
  }

  function handleWinning() {
    setResult(1);
    setIsPlaying(false);
  }
  function handleLoosing() {
    setResult(2);
    setIsPlaying(false);
  }
  return (
    <div className="pb-10">
      {!isPlaying ? (
        <div className="flex flex-col text-text mt-32">
          {result > 0 && (
            <div className="text-center text-2xl mb-5">
              <h1 className="font-semibold text-3xl">
                You {result === 1 ? "Won" : "Lost"}
              </h1>
              <h2>Your score: {curScore}</h2>
            </div>
          )}
          <label
            htmlFor="gameSize"
            className="text-center text-2xl font-semibold"
          >
            Select number of cards{" "}
            <input
              type="number"
              id="gameSize"
              required
              min="1"
              max="52"
              className="text-black rounded-md ml-4 p-2"
              onChange={(e) => setNumberCard(e.target.value)}
            />
          </label>

          <button
            className="bg-secondary m-auto py-2 px-5 text-xl rounded mt-5"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            Play
          </button>
        </div>
      ) : (
        <CardDeck
          highScore={highScore}
          setHighScore={setHighScore}
          curScore={curScore}
          setCurScore={setCurScore}
          setIsPlaying={setIsPlaying}
          numberCard={numberCard}
          setNumberCard={setNumberCard}
          handleLoosing={handleLoosing}
          handleWinning={handleWinning}
        />
      )}
    </div>
  );
}
