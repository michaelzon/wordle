import Footer from './Components/Footer/Footer';
import Instructions from './Components/Instructions/Instructions';
import Grid from './Components/Grid/Grid';
import WordCheckInfo from './Components/WordCheckInfo/WordCheckInfo';
import { useWordle } from './useWordle';
import './wordle.css';
import {Modal} from "./Modal/Modal";
import React from "react";

function Wordle() {
    const { rows, wordExists, modalIsOpen, setModalIsOpen, handleTryAgain, roundIsWon, mysteryWord, modalIsEscaped, setModalIsEscaped } = useWordle();

    return (
        <main className={"container"}>
            {!modalIsOpen &&
                <div aria-hidden={modalIsOpen} className={"wrapper"}>
                    <Instructions/>
                    <Grid rows={rows}/>
                    {!wordExists &&
                        <WordCheckInfo/>
                    }
                    {modalIsEscaped &&
                        <button className={"container__button theme"} onClick={handleTryAgain}>{"Try again"}</button>
                    }
                    <Footer/>
                </div>
            }
            <Modal setIsOpen={setModalIsOpen} isOpen={modalIsOpen} handleClose={handleTryAgain} setModalIsEscaped={setModalIsEscaped} modalIsEscaped={modalIsEscaped}>
                <Modal.BigEmoji> {roundIsWon ? "🏆" : "🙈"} </Modal.BigEmoji>
                <Modal.Header> {roundIsWon ? "You're a Winner, Champ! 🏆" : "Oops! Though Luck, But Don't Give Up!"} </Modal.Header>
                <Modal.Description> {roundIsWon ? `You guessed the word: '${mysteryWord.join("")}'!` : `The word was '${mysteryWord.join("")}'`} </Modal.Description>
                <Modal.Body> {roundIsWon ? "Congrats! You've crushed it and won the game. Now, bask in your glory and celebrate like a boss! 🎉" : "You didn't quite make it this time, but hey no worries! Give it another shot, and whoknows, the next round might be your moment of glory! Keep going champ! 💪🎮 "} </Modal.Body>
                <Modal.Footer handleClose={handleTryAgain}> Try Again </Modal.Footer>
            </Modal>
        </main>
    );
}

export default Wordle;
