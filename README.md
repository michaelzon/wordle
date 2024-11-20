# Wordle App

A fun and interactive Wordle-inspired app where you can guess five-letter words, track your progress, and challenge yourself to beat the game! This app is built with React and offers a seamless user experience, dynamic feedback, and an intuitive design.

---

## Features

- **Dynamic Word Generation**: Random words are fetched via the Datamuse API to keep the game fresh every time.
- **Interactive Grid**: Visual feedback for correct letters (`correct`) and partially correct letters (`present`).
- **User-Friendly Modal**: Displays winning or losing states with playful and encouraging messages.
- **Keyboard Interaction**: Smooth and responsive key-based inputs for a classic Wordle feel.
- **Error Handling**: Checks for valid words and notifies you if a guess is invalid.
- **Clean Design**: Minimalistic UI with clear instructions and accessible features.

---

## How to Play

1. Guess the **mystery word** in 5 tries.
2. Each guess must be a valid five-letter word.
3. Feedback is provided after each guess:
    - **Green** tiles indicate correct letters in the correct position.
    - **Yellow** tiles indicate correct letters in the wrong position.
4. You win if you guess the word within 5 attempts. Otherwise, try again!

---

## Where to play 

You can view and use the project live at https://wordle-pi-dun.vercel.app/ !

[//]: # (## Getting Started)

[//]: # ()
[//]: # (To run the Wordle app on your local machine:)

[//]: # ()
[//]: # (### Prerequisites)

[//]: # ()
[//]: # (- [Node.js]&#40;https://nodejs.org/&#41; and npm installed.)

[//]: # ()
[//]: # (### Installation)

[//]: # ()
[//]: # (1. Clone the repository:)

[//]: # (   ```bash)

[//]: # (   git clone https://github.com/michaelzon/wordle.git)

[//]: # (   cd wordle)

[//]: # (   ```)

[//]: # ()
[//]: # (2. Install dependencies:)

[//]: # (   ```bash)

[//]: # (   npm install)

[//]: # (   ```)

[//]: # ()
[//]: # (3. Start the development server:)

[//]: # (   ```bash)

[//]: # (   npm start)

[//]: # (   ```)

[//]: # (   Open [http://localhost:3000]&#40;http://localhost:3000&#41; to view the app in your browser.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Scripts)

[//]: # ()
[//]: # (### `npm start`)

[//]: # ()
[//]: # (Starts the app in development mode.\)

[//]: # (The page will automatically reload if you edit the code.)

[//]: # ()
[//]: # (### `npm test`)

[//]: # ()
[//]: # (Launches the test runner in watch mode. Use this to test and debug.)

[//]: # ()
[//]: # (### `npm run build`)

[//]: # ()
[//]: # (Builds the app for production in the `build` directory.\)

[//]: # (It optimizes the React app for best performance and minified output.)

[//]: # ()
[//]: # (### `npm run eject`)

[//]: # ()
[//]: # (Eject the app to gain full control of configurations such as Webpack, Babel, etc.)

[//]: # ()
[//]: # (---)

## File Structure

- **`src`**
    - **`Components`**
        - `Footer`: Footer with author info and GitHub link.
        - `Instructions`: Game instructions section.
        - `Grid`: Visual grid for user guesses.
        - `WordCheckInfo`: Displays feedback for invalid words.
    - **`Modal`**
        - A compound component to display modals for end-of-game messages.
    - **`useWordle`**: Custom hook handling game logic and state management.
    - **`words.js`**: List of valid words for dictionary checks.

---

## Key Features in Code

- **Custom Hook (`useWordle`)**:
    - Manages game state (rows, guesses, turn).
    - Handles user input and keyboard events.
    - Evaluates guesses for correctness and position.

- **Compound Modal Component**:
    - Displays victory or defeat messages with dynamic content.

- **Dynamic Word Fetching**:
    - Utilizes the Datamuse API to generate random five-letter words.

---

## Author

Made by [Michael Zonneveld](https://github.com/michaelzon).

---

## License

This project is licensed under the MIT License.

Enjoy playing Wordle and happy coding! 🎉