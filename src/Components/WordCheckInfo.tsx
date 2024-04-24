import {
    gameInstructions,
    themeClass
} from "../styles/Wordle.css";

export const WordCheckInfo = () => {

    return (
        <section id='word-check' className={`${themeClass} ${gameInstructions}`}
            aria-labelledby="word-check">
            <p> This word can't be found in the dictionary. Try a valid word.</p>
        </section>
    );
};

export default WordCheckInfo
