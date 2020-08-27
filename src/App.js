import React from "react";
import Game from "./components/game/Game";
import "./App.css";
import raccoons from "./assets/images/raccoon.jpg";
import squirrels from "./assets/images/squirrel.png";
import bunnies from "./assets/images/bunny.jpg";
import hounds from "./assets/images/hound.jpg";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: "./src/assets/images/raccoon.jpg",
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: "./assets/images/squirrel.png",
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: "./assets/images/bunny.jpg",
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: "./assets/images/hound.jpg",
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
