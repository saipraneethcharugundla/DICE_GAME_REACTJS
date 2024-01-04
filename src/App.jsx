import { useState } from "react";
import "./App.css";

function App() {
  const [nameplpayer1, setnameplpayer1] = useState({
    name: "Dice Game",
    count1: 0,
    count2: 0,
    draws: 0,
    imagename1: "/images/dice6.png",
    imagename2: "/images/dice6.png",
    player1Name: "",
    player2Name: "",
  });

  const handleInputChange = (event, player) => {
    const { value } = event.target;
    setnameplpayer1((prevState) => ({
      ...prevState,
      [`${player}Name`]: value,
    }));
  };

  function totalplays() {
    var randomnum1 = Math.floor(Math.random() * 6) + 1;
    var randomnum2 = Math.floor(Math.random() * 6) + 1;
    setnameplpayer1((prevState) => ({
      ...prevState,
      name:
        randomnum1 > randomnum2
          ? prevState.player1Name + " won"
          : randomnum1 < randomnum2
          ? prevState.player2Name + " won"
          : "It's a Draw",
      count1: randomnum1 > randomnum2 ? prevState.count1 + 1 : prevState.count1,
      count2: randomnum2 > randomnum1 ? prevState.count2 + 1 : prevState.count2,
      draws: randomnum1 === randomnum2 ? prevState.draws + 1 : prevState.draws,
      imagename1: "/images/dice" + randomnum1 + ".png",
      imagename2: "/images/dice" + randomnum2 + ".png",
    }));
  }

  function player1totalwins() {
    setnameplpayer1((prevState) => ({
      ...prevState,
      name: prevState.player1Name + " total wins: " + prevState.count1,
    }));
  }

  function player2totalwins() {
    setnameplpayer1((prevState) => ({
      ...prevState,
      name: prevState.player2Name + " total wins: " + prevState.count2,
    }));
  }

  function totaldraws() {
    setnameplpayer1((prevState) => ({
      ...prevState,
      name: "Total Draws: " + prevState.draws,
    }));
  }

  return (
    <>
      <div className="container">
        <h1>{nameplpayer1.name}</h1>

        <div className="dice">
          <input
            type="text"
            placeholder="Player 1 name"
            value={nameplpayer1.player1Name}
            onChange={(e) => handleInputChange(e, "player1")}
          />
          <img className="img1" src={nameplpayer1.imagename1} alt="diceimage" />
        </div>

        <div className="dice">
          <input
            type="text"
            placeholder="Player 2 Name"
            value={nameplpayer1.player2Name}
            onChange={(e) => handleInputChange(e, "player2")}
          />
          <img className="img2" src={nameplpayer1.imagename2} alt="diceimage" />
        </div>
        <div>
          <button className="but" onClick={totalplays}>
            Play
          </button>
        </div>
        <div>
          <button className="but" onClick={player1totalwins}>
            Player1 totalwins
          </button>
          <button className="but" onClick={player2totalwins}>
            Player2 totalwins
          </button>
          <button className="but" onClick={totaldraws}>
            TOTAL DRAWS
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
