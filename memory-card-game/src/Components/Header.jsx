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
        <h2 className="text-xl italic mt-1 ml-2">Developed by GPham</h2>
      </div>

      <div className="text-right text-xl mt-3 mr-10">
        <p>Current score: {curScore}</p>
        <p>High score: {highScore}</p>
      </div>
    </div>
  );
}
