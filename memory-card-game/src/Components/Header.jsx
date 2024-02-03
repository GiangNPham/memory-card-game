export default function Header({
  highScore,
  setHighScore,
  curScore,
  setCurScore,
}) {
  return (
    <div className="text-text grid grid-cols-2 mx-20 pt-6">
      <div>
        <h1 className="font-bold text-5xl">Card memory game</h1>
        <span className="text-xl italic mt-1 ml-2">Developed by GPham</span>
        <p>Dont&#39;t click on the same cards</p>
      </div>

      <div className="text-right text-xl mt-3 mr-10">
        <p>Current score: {curScore}</p>
        <p>High score: {highScore}</p>
        <button
          className="bg-secondary rounded py-1 mt-1 px-2"
          onClick={() => {
            location.reload();
          }}
        >
          Reset game
        </button>
      </div>
    </div>
  );
}
