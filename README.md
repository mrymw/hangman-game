# Hangman Game

## Overview

This project is a classic **Hangman game** built with HTML, CSS, and JavaScript. The game allows users to guess words by selecting letters, with various difficulty levels (Easy, Medium, Hard). The objective is to guess the word correctly before the hangman image is completed. A `.victory.gif` is displayed upon winning the game, and a modal shows the game result (win/lose).

## Features

- **Difficulty Levels:** Users can choose from Easy, Medium, or Hard difficulty levels, each providing a different word challenge.
- **Word Display:** The word is displayed as underscores initially, representing the letters to be guessed.
- **Guesses:** Players can select letters from the alphabet to make guesses. Correct guesses reveal the letters in the word, while incorrect guesses lead to the hangman drawing.
- **Game Modal:** Displays the result of the game (win or lose) in a modal popup.
- **Victory Animation:** When a user wins the game, a `victory.gif` animation is displayed.
- **Responsive Design:** The game adjusts to various screen sizes for a seamless user experience.

## Project Structure

- **HTML Structure:** The main layout of the game is designed using a combination of `div` elements. The `.game-modal` is used to show the win/lose messages. `.difficulty-selection` contains the buttons for choosing the difficulty. The main game is displayed in the `.hangman-box`, where the title and hangman image appear, while the `.game-box` contains the word, hint, guesses, and keyboard.

- **CSS Styles:** The game's styling includes hover effects for buttons, dynamic display adjustments, and responsiveness. Difficulty selection buttons change color to purple when hovered over, with text turning white for better visibility.

- **JavaScript Functionality:**
    - **Difficulty Selection:** Users can pick a difficulty, and the game dynamically updates to provide the appropriate challenge.
    - **Word Selection:** A random word is chosen based on the selected difficulty. The game tracks user guesses and updates the display accordingly.
    - **Guess Handling:** When the player selects a letter, it's either revealed in the word or marked as incorrect, progressing the hangman drawing.
    - **Victory and Defeat:** The game tracks the number of incorrect guesses and displays a victory or defeat message based on the outcome. A `victory.gif` is shown upon successful completion of the game.

## How to Play

1. **Choose a Difficulty:** Select a difficulty level from Easy, Medium, or Hard.
2. **Start Guessing:** Use the on-screen keyboard to select letters. Correct guesses will reveal the letters in the word, while incorrect guesses will add parts to the hangman drawing.
3. **Win or Lose:** Continue guessing letters until you either win by guessing the word or lose by completing the hangman drawing. A modal will show the result of the game.

## Customization

- **Word Bank:** The word lists for each difficulty can be easily customized by editing the arrays in the JavaScript file.
- **Victory Animation:** The `victory.gif` can be swapped for another animation by updating the image file in the assets folder.
- **Design Changes:** The CSS can be updated to change the game's look and feel. For example, you can adjust the color scheme, font sizes, and layout.

## Future Enhancements

Some possible improvements for this project include:
- **Hint System:** Add an optional hint system that provides the player with a clue for difficult words.
- **Multiplayer Mode:** Implement a multiplayer mode where players can take turns guessing words.
- **Score Tracking:** Introduce a score tracking system to keep a record of wins and losses.
- **Timer:** Add a timer that challenges the player to guess the word within a certain time limit.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hangman-game.git
    ```
2. **Open the project folder:**
    ```bash
    cd hangman-game
    ```
3. **Open the `index.html` file in your browser:**
    - You can open it directly by double-clicking on the `index.html` file, or you can serve it using a local web server like VS Code's Live Server extension.

## Contribution

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. You can also open issues for any bugs or feature requests.

---

**Note:** The game's layout and functionality are currently optimized for desktop browsers. Some elements may need adjustments for mobile devices, which could be addressed in future updates.
