# 🎲 Tenzies Game

A fast-paced, interactive dice-rolling game built with React. The goal is to make all 10 dice show the same value in the fewest rolls possible.


## 🕹️ How It Works

1. **The Setup:** The game starts with 10 dice, each displaying a random value between 1 and 6.
2. **Locking Dice:** Click on a die to "freeze" or lock its current value. Locked dice will turn a different color and will not change on the next roll.
3. **Rolling:** Click the **Roll** button to randomize all unlocked dice.
4. **Winning:** Keep rolling until all 10 dice show the exact same value. 
5. **Game Over:** Once all dice match, a winning screen appears and you can click **Restart** to play again.

---

## ✨ Features

* **Interactive Dice Grid:** 10 uniquely rendered dice components.
* **State Management:** Tracks locked state and current values
* **Conditional Styling:** Visual feedback showing which dice are currently held.
* **Win Condition Analytics:** Instantly detects when all dice are identical and locked.
* **Instant Restart:** Single-click button to reset the board and start a new round.

---

## 🛠️ Tech Stack

* **Frontend:** React.js 
* **Styling:** Vanilla CSS
* **Build Tool:** Vite / Create React App
