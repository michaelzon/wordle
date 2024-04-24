import {
    grid,
    gridItem,
    gridItemFilled,
    gridRow,
    letterCorrect,
    letterPresent
} from "../styles/Wordle.css";

interface Tile {
    letter: string;
    evaluation: string;
}

interface GridProps {
    rows: Tile[][];
}

export const Grid: React.FC<GridProps> = (props: GridProps) => {

    return (
        <div className={grid} role="grid">
            {props.rows.map((row: Tile[], i) => (
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
    );
};

export default Grid
