import { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const randomDice = () =>
    new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));

  const [dice, setDice] = useState(() => randomDice());

  const holdDie = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id == id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die,
      ),
    );
  };

  const diceEl = dice.map((die) => (
    <Die
      dieValue={die.value}
      isHeld={die.isHeld}
      key={die.id}
      hold={() => holdDie(die.id)}
      id={die.id}
    />
  ));

  const rollButton = () => {
    gameWon
      ? setDice(randomDice())
      : setDice((prevDice) =>
          prevDice.map((die) =>
            !die.isHeld
              ? {
                  ...die,
                  value: Math.ceil(Math.random() * 6),
                }
              : die,
          ),
        );
  };

  const diceValue = dice.every((die) => die.value == dice[0].value);
  const diceIsHeld = dice.every((die) => die.isHeld == true);

  const gameWon = dice && diceIsHeld ? true : false;

  console.log(gameWon);

  return (
    <main>
      <div className="text">
        <h1>Tenzies Game</h1>
        <p>Click each die to lock its value and match them all.</p>
      </div>
      <div className="dice">{diceEl}</div>
      <button className="roll-button" onClick={rollButton}>
        {!gameWon ? "Roll" : "Restart"}
      </button>
      {gameWon && <h2>Congratulations, You Won!</h2>}
    </main>
  );
}
