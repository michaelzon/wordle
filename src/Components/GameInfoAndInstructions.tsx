import {
    gameInstructions,
    header,
    themeClass
} from "../styles/Wordle.css";

export const GameInfoAndInstruction = () => {

    return (
        <>
            <header className={header}>
                <h1>Wordle!</h1>
                {/* <button onClick={toggle}>{isToggled ? 'Turn Off' : 'Turn On'}</button> */}
            </header>
            <section id='game-instructions' className={`${themeClass} ${gameInstructions}`}
                aria-labelledby="game-instructions">
                <h3>How to Play</h3>
                <p>Guess the WORDLE in 5 tries. Each guess must be a valid five-letter word. Hit the enter
                    button to
                    submit.</p>
            </section>
        </>
    );
};

export default GameInfoAndInstruction
