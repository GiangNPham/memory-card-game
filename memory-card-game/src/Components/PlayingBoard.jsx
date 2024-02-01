import { useState } from "react";
import CardDeck from "./CardDeck";

export default function PlayingBoard({
  highScore,
  setHighScore,
  curScore,
  setCurScore,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [numberCard, setNumberCard] = useState(1);

  function handleClick() {
    if (numberCard >= 1 && numberCard <= 52) {
      setIsPlaying(true);
    } else {
      alert("Please input a number in range of 1 to 52");
    }
  }
  return (
    <>
      {!isPlaying ? (
        <div className="flex flex-col text-text mt-32">
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
          setHighScore={setHighScore}
          curScore={curScore}
          setCurScore={setCurScore}
          setIsPlaying={setIsPlaying}
          numberCard={numberCard}
          setNumberCard={setNumberCard}
        />
      )}
    </>
  );
}
