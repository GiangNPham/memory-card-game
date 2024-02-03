export default function Card({
  info,
  chosenCards,
  setChosenCards,
  code,
  shuffle,
  drawnCards,
  highScore,
  setHighScore,
  curScore,
  setCurScore,
  numberCard,
  handleLoosing,
  handleWinning,
}) {
  const handleClickCard = function () {
    if (chosenCards.some((card) => card === code)) {
      if (curScore > highScore) setHighScore(curScore);
      handleLoosing();
    } else {
      setCurScore(curScore + 1);
      if (chosenCards.length === numberCard - 1) {
        handleWinning();
        return;
      }
      setChosenCards([...chosenCards, code]);

      shuffle(drawnCards);
    }
  };

  return (
    <div className="mt-5">
      <img
        onClick={() => {
          handleClickCard();
        }}
        className="h-72"
        src={info.image}
      />
    </div>
  );
}
