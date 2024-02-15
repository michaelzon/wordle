import {useCallback, useEffect, useRef, useState} from 'react';
import axios from "axios";

interface Tile {
    letter: string;
    evaluation: string;
}

export function useWordle() {
    const [rows, setRows] = useState<Tile[][]>([]);
    const [mysteryWord, setMysteryWord] = useState<string[]>([]);
    const [turn, setTurn] = useState<number>(0);
    const [currentTileIndex, setCurrentTileIndex] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string[]>([]);
    const multiples = useRef<string[]>([]);
    const [winnerModalIsOpen, setWinnerModalIsOpen] = useState(false);
    const [loserModalIsOpen, setLoserModalIsOpen] = useState(false);

    const initRows = (): Tile[][] => {
        return Array(5).fill(null).map(() =>
            Array(5).fill(null).map(() => ({
                letter: '',
                evaluation: '',
            }))
        );
    }

    const fetchWord = async () => {
        try {
            const response = await axios.get('https://random-word-api.herokuapp.com/word?length=5');
            setMysteryWord(response.data[0].split(''));
        } catch (error) {
            console.error('Error fetching wordle data', error);
        }
    };

    useEffect(() => {
        const asyncEffect = async () => {
            await fetchWord();
            const rows = initRows();
            setRows(rows);
        };

        asyncEffect().catch(error => console.error("An error occurred while fetching the data", error));
    }, []);

    const handleKeyUp = useCallback((e: KeyboardEvent) => {
        if (/^[a-z]$/i.test(e.key) && currentTileIndex < 5 && turn < 5) {
            addLetterToTile(e.key);
        }

        if (e.key === 'Backspace') {
            if (currentTileIndex > 0) {
                setRows(prev => {
                    const newRows = [...prev];
                    newRows[turn][currentTileIndex - 1].letter = "";
                    return newRows;
                });

                setCurrentTileIndex(prev => prev - 1);
                const backspacedInput = currentGuess.slice(0, -1);
                setCurrentGuess(backspacedInput);
            }
        }

        if (e.key === 'Enter' && currentTileIndex === 5) {
            checkForMultiples();
            handleRows();
            checkIfGuessIsCorrect();

            setCurrentTileIndex(0);
            setTurn(prev => prev + 1);
            setCurrentGuess([]);
        }
    }, [currentTileIndex, currentGuess]);

    useEffect(() => {
        window.document.addEventListener('keyup', handleKeyUp);

        return () => {
            window.document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);

    const addLetterToTile = (key: string) => {
        setCurrentGuess(prevInput => [...prevInput, key.toLowerCase()]);

        setRows(prev => {
            const newRows = [...prev];
            newRows[turn][currentTileIndex].letter = key;
            return newRows;
        });

        setCurrentTileIndex(currentTileIndex + 1);
    }

    const handleRows = () => {
        const newRows = [...rows];
        evaluateGuess(currentGuess, newRows);
        setRows(newRows);
    }

    function checkForMultiples(): void {
        multiples.current = currentGuess.filter((letter, index) => currentGuess.indexOf(letter) !== index);
    }

    const checkIfGuessIsCorrect = () => {
        const userHasWon = rows[turn].every(item => item.evaluation === 'correct');
        const delay = 1000;
        if (userHasWon) {
            setTimeout(() => {
                setWinnerModalIsOpen(true);
            }, delay);
        } else if (!userHasWon && turn === 4) {
            setTimeout(() => {
                setLoserModalIsOpen(true);
            }, delay);
        }
    }

    const evaluateGuess = (input: string[], newRows: Tile[][]) => {
        input.forEach((char: string, i: number) => {
            newRows[turn][i].letter = char;
            if (char === mysteryWord[i]) {
                newRows[turn][i].evaluation = 'correct';
            }
        });
        input.forEach((char) => {
            if (mysteryWord.includes(char)) {
                newRows[turn].forEach((item, i) => {
                    if (char === item.letter && item.evaluation !== 'correct' && !multiples.current.includes(item.letter)) {
                        newRows[turn][i].evaluation = 'present';
                    }
                });
            }
        })
    };

    const handleCloseModal = () => {
        setWinnerModalIsOpen(false);
        setLoserModalIsOpen(false);
        setCurrentTileIndex(0);
        setTurn(0);
        setCurrentGuess([]);
        const rows = initRows();
        setRows(rows);
        (async () => {
            await fetchWord();
        })();
    };

    return {rows: rows, winnerModalIsOpen, loserModalIsOpen, handleCloseModal};
}