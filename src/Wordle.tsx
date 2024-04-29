import { useWordle } from './useWordle'
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
    emojiWrapper,
    gameResults,
    header,
    footer,
    author,
    simpleButton,
    modalButton
} from "./styles/Wordle.css";
import React, { createContext, useState, useEffect, useContext, FunctionComponent } from 'react';
import { CompoundModal } from "./Modal/CompoundModal";
import GameInfoAndInstruction from './Components/GameInfoAndInstructions';
import Grid from './Components/Grid';
import WordCheckInfo from './Components/WordCheckInfo';
import Footer from './Components/Footer';

interface ToggleContextType {
    on: boolean;
    toggle: () => void;
}

const defaultContextValue: ToggleContextType = {
    on: false,
    toggle: () => { }
};

const ToggleContext = createContext<ToggleContextType>(defaultContextValue);

interface ToggleProps {
    onToggle: (on: boolean) => void;
    children: React.ReactNode;
}

interface OnOffProps {
    children: React.ReactNode;
}

const On: React.FC<OnOffProps> = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? <>{children}</> : null;
};

// Define a custom type that includes the static property
interface ToggleComponent extends FunctionComponent<ToggleProps> {
    On: React.FC<OnOffProps>;
}

// Use the custom type for the Toggle component
const Toggle: ToggleComponent = (props) => {
    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(oldOn => !oldOn);
    };

    useEffect(() => {
        props.onToggle(on);
    }, [on, props.onToggle]);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {props.children}
        </ToggleContext.Provider>
    );
};

Toggle.On = On;

export { Toggle, ToggleContext };

type RoundContextType = {
    progress: string;
    setProgress: (progress: string) => void;
}

const defaultRoundContextValue: RoundContextType = {
    progress: 'ongoing',
    setProgress: () => { }
}

function Wordle() {
    const { rows, wordExists, modalIsOpen, handleTryAgain, roundIsWon } = useWordle();
    // const roundContext = createContext<RoundContextType>(defaultRoundContextValue);

    return (
        <main className={container}>
            {!modalIsOpen &&
                <div className={wrapper}>
                    <GameInfoAndInstruction />
                    <Grid rows={rows} />
                    {!wordExists &&
                        <WordCheckInfo />
                    }
                    <Footer />
                </div>
            }
            <CompoundModal isOpen={modalIsOpen}>
                <CompoundModal.BigEmoji emoji={`${roundIsWon ? "🏆" : "🙈"}`} />
                <CompoundModal.Header title={`${roundIsWon ? "You're a Winner, Champ! 🏆" : "Oops! Though Luck, But Don't Give Up!"}`} />
                <CompoundModal.Body description={`${roundIsWon ? "Congrats! You've crushed it and won the game. Now, bask in your glory and celebrate like a boss! 🎉" : "You didn't quite make it this time, but hey no worries! Give it another shot, and whoknows, the next round might be your moment of glory! Keep going champ! 💪🎮 "}`} />
                <CompoundModal.Footer buttonText={'Try Again'} handleClose={handleTryAgain} />
            </CompoundModal>

            {/* <Modal isOpen={winnerModalIsOpen} onClose={handleCloseModal}>
                <section className={gameResults} aria-labelledby="game-results">
                    <div className={emojiWrapper} aria-label="trophy-emoji"> 🏆</div>
                    <h3>You're a Winner, Champ!</h3>
                    <p aria-label="party-popper-emoji"> Congrats! You've crushed it and won the game. Now, bask in your glory and celebrate like a boss! 🎉 </p>
                </section>
            </Modal>
            <Modal isOpen={loserModalIsOpen} onClose={handleCloseModal}>
                <section className={gameResults} aria-labelledby="game-results">
                    <div className={emojiWrapper} aria-label="see-no-evil-monkey-emoji"> 🙈</div>
                    <h3>Oops! Though Luck, But Don't Give Up!</h3>
                    <p aria-label="flexed-biceps-emoji video-game-emoji"> You didn't quite make it this time, but hey,
                        no worries! Give it another shot, and who
                        knows,
                        the next round might be your moment of glory! Keep going champ! 💪🎮 </p>
                </section>
            </Modal> */}
        </main>
    );
}

export default Wordle;
