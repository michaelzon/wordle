import Footer from './Components/Footer/Footer';
import Instructions from './Components/Instructions/Instructions';
import Grid from './Components/Grid/Grid';
import WordCheckInfo from './Components/WordCheckInfo/WordCheckInfo';
import { useWordle } from './useWordle';
import './wordle.css';
import {Modal} from "./Modal/Modal";

function Wordle() {
    const { rows, wordExists, modalIsOpen, handleTryAgain, roundIsWon } = useWordle();

    return (
        <main className={"container"}>
            {!modalIsOpen &&
                <div className={"wrapper"}>
                    <Instructions />
                    <Grid rows={rows} />
                    {!wordExists &&
                        <WordCheckInfo />
                    }
                    <Footer />
                </div>
            }
            <Modal isOpen={modalIsOpen}>
                <Modal.BigEmoji> {roundIsWon ? "🏆" : "🙈"} </Modal.BigEmoji>
                <Modal.Header> {roundIsWon ? "You're a Winner, Champ! 🏆" : "Oops! Though Luck, But Don't Give Up!"} </Modal.Header>
                <Modal.Body> {roundIsWon ? "Congrats! You've crushed it and won the game. Now, bask in your glory and celebrate like a boss! 🎉" : "You didn't quite make it this time, but hey no worries! Give it another shot, and whoknows, the next round might be your moment of glory! Keep going champ! 💪🎮 "} </Modal.Body>
                <Modal.Footer handleClose={handleTryAgain}> Try Again </Modal.Footer>
            </Modal>
        </main>
    );
}

export default Wordle;
