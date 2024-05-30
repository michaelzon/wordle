import "./instructions.css";

export const Instructions = () => {

    return (
        <>
            <header className="header">
                <h1>Wordle!</h1>
            </header>
            <section id='gameInstructions' className={`${'theme'} ${'instructions'}`}
                aria-labelledby="game-instructions">
                <h3>How to Play</h3>
                <p>Guess the WORDLE in 5 tries. Each guess must be a valid five-letter word. Hit the enter
                    button to
                    submit.</p>
            </section>
        </>
    );
};

export default Instructions
