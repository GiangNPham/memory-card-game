import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

export default function CardDeck({
  highScore,
  setHighScore,
  curScore,
  setCurScore,
  setIsPlaying,
  numberCard,
  setNumberCard,
  handleLoosing,
  handleWinning,
}) {
  // const [deckId, setDeckId] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async function () {
      const res = await fetch(
        "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const data = await res.json();
      // await setDeckId(data.deck_id);

      const res2 = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=${numberCard}`
      );
      const data2 = await res2.json();
      setDrawnCards(data2.cards);
    };
    fetchDeck();
  }, [numberCard]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      {drawnCards.length === 0 || drawnCards === undefined ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-5 place-items-center mx-80 mt-10">
          {drawnCards?.map((card) => {
            return (
              <Card
                drawnCards={drawnCards}
                info={card}
                key={card.code}
                chosenCards={chosenCards}
                code={card.code}
                setChosenCards={setChosenCards}
                shuffle={shuffle}
                highScore={highScore}
                setHighScore={setHighScore}
                curScore={curScore}
                setCurScore={setCurScore}
                numberCard={numberCard}
                handleLoosing={handleLoosing}
                handleWinning={handleWinning}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
//
