import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import PlayingBoard from "./Components/PlayingBoard";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [curScore, setCurScore] = useState(0);
  return (
    <div className="app">
      <Header
        highScore={highScore}
        setHighScore={setHighScore}
        curScore={curScore}
        setCurScore={setCurScore}
      />
      <PlayingBoard
        highScore={highScore}
        setHighScore={setHighScore}
        curScore={curScore}
        setCurScore={setCurScore}
      />
    </div>
  );
}

export default App;
