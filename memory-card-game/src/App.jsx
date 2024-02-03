import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlayingBoard from "./components/PlayingBoard";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [curScore, setCurScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bg-background min-h-screen">
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
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
