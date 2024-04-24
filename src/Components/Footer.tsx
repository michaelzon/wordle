import {
    author,
    footer
} from "../styles/Wordle.css";
export const Footer = () => {

    return (
        <footer className={footer}>
            <p className={author}>
                Made by: Michael Zonneveld
            </p>
        </footer>
    );
};

export default Footer
