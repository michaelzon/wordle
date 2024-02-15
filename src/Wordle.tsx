import {useWordle} from './useWordle'
import {
    grid,
    container,
    gridItem,
    themeClass,
    gridItemFilled,
    gridRow,
    wrapper,
    gameInstructions,
    letterPresent,
    letterCorrect,
    emoji,
    gameResults,
    header,
    footer,
    author
} from "./Wordle.css";
import Modal from "./Modal";

function Wordle() {
    const {rows, winnerModalIsOpen, loserModalIsOpen, handleCloseModal} = useWordle();

    return (
        <main className={container}>
            {!winnerModalIsOpen && !loserModalIsOpen &&
                <div className={wrapper}>
                    <header className={header}>
                        <h1>Wordle!</h1>
                    </header>
                    <section id='game-instructions' className={`${themeClass} ${gameInstructions}`}
                             aria-labelledby="game-instructions">
                        <h3>How to Play</h3>
                        <p>Guess the WORDLE in 5 tries. Each guess must be a valid five-letter word. Hit the enter
                            button to
                            submit.</p>
                    </section>
                    <div className={grid} role="grid">
                        {rows.map((row, i) => (
                            <div className={gridRow} role="row" key={i}>
                                {row.map((tile, j) => (
                                    <div key={`${i}-${j}`}
                                         className={`${gridItem} ${tile.letter !== '' && gridItemFilled} ${tile.evaluation === 'present' && letterPresent} ${tile.evaluation === 'correct' && letterCorrect}`}
                                         role="gridcell"
                                         aria-label={`Letter ${tile.letter}, Evaluation ${tile.evaluation}`}>
                                        {tile.letter}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <footer className={footer}>
                        <p className={author}>
                            Made by: Michael Zonneveld for CVMaker
                        </p>
                    </footer>
                </div>
            }
            <Modal isOpen={winnerModalIsOpen} onClose={handleCloseModal}>
                <section className={gameResults} aria-labelledby="game-results">
                    <div className={emoji} aria-label="trophy-emoji"> 🏆</div>
                    <h3>You're a Winner, Champ!</h3>
                    <p aria-label="party-popper-emoji"> Congrats! You've crushed it and won the game. Now, bask in your
                        glory and celebrate like
                        a
                        boss!
                        🎉 </p>
                </section>
            </Modal>
            <Modal isOpen={loserModalIsOpen} onClose={handleCloseModal}>
                <section className={gameResults} aria-labelledby="game-results">
                    <div className={emoji} aria-label="see-no-evil-monkey-emoji"> 🙈</div>
                    <h3>Oops! Though Luck, But Don't Give Up!</h3>
                    <p aria-label="flexed-biceps-emoji video-game-emoji"> You didn't quite make it this time, but hey,
                        no worries! Give it another shot, and who
                        knows,
                        the next round might be your moment of glory! Keep going champ! 💪🎮 </p>
                </section>
            </Modal>
        </main>
    );
}

export default Wordle;
