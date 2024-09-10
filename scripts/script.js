const levels = {
    easy: [
        { word: "apple", hint: "A fruit" },
        { word: "house", hint: "A place to live" },
        { word: "dog", hint: "A common pet" },
        { word: "cat", hint: "A small domestic animal" },
        { word: "ball", hint: "A round object used in games" },
        { word: "book", hint: "A collection of written or printed pages" },
        { word: "car", hint: "A vehicle with four wheels" },
        { word: "fish", hint: "An aquatic animal" },
        { word: "tree", hint: "A tall plant with a trunk and branches" },
        { word: "sun", hint: "The star at the center of our solar system" }
    ],
    medium: [
        { word: "elephant", hint: "A large animal" },
        { word: "guitar", hint: "A musical instrument" },
        { word: "river", hint: "A large, flowing body of water" },
        { word: "castle", hint: "A large building with strong walls" },
        { word: "pyramid", hint: "A monumental structure with a square base and triangular sides" },
        { word: "mountain", hint: "A large natural elevation of the earth's surface" },
        { word: "planet", hint: "A celestial body orbiting a star" },
        { word: "balloon", hint: "A flexible bag filled with air or gas" },
        { word: "dolphin", hint: "A marine mammal known for its intelligence" },
        { word: "jacket", hint: "A piece of clothing worn on the upper body" }
    ],
    hard: [
        { word: "university", hint: "An educational institution" },
        { word: "astronaut", hint: "A space traveler" },
        { word: "philosophy", hint: "The study of fundamental questions about existence" },
        { word: "microscope", hint: "An instrument used to see small objects" },
        { word: "medieval", hint: "Pertaining to the Middle Ages" },
        { word: "hypothesis", hint: "An explanation made on the basis of limited evidence" },
        { word: "telescope", hint: "An instrument for observing distant objects" },
        { word: "metamorphosis", hint: "A transformation or change in form" },
        { word: "encyclopedia", hint: "A comprehensive reference work" },
        { word: "exquisite", hint: "Extremely beautiful and delicate" }
    ]
};


const difficultyButtons = document.querySelectorAll(".difficulty-selection button");

difficultyButtons.forEach(button => {
    button.addEventListener("click", () => {
        difficultyButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        currentDifficulty = button.dataset.difficulty;
        loadNextWord();
    
    });
});

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

let currentWord = "";  // Initialize with an empty string
let correctLetters = [];
let wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
};

const loadNextWord = () => {
    resetGame();
    const levelWords = levels[currentDifficulty];
    if (levelWords.length === 0) {
        console.error("No words available for the selected difficulty");
        return;
    }
    const word = levelWords[Math.floor(Math.random() * levelWords.length)];
    if (!word || !word.word) {
        console.error("Invalid word object:", word);
        return;
    }
    currentWord = word.word;
    console.log(`Current Word: ${currentWord}`);  // Debugging info
    document.querySelector(".hint-text b").innerText = word.hint;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
};

const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
};

const handleGuess = (clickedLetter, button) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
};

playAgainBtn.addEventListener("click", () => {
    document.querySelector(".difficulty-selection").style.display = 'block'; // Show level selection again
    loadNextWord();
});

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => handleGuess(String.fromCharCode(i), e.target));
}

// Initialize with a default difficulty
let currentDifficulty = 'easy';
loadNextWord();
