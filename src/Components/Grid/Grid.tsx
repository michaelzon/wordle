import "./grid.css"

interface Tile {
    letter: string;
    evaluation: string;
}

interface GridProps {
    rows: Tile[][];
}

export const Grid: React.FC<GridProps> = (props: GridProps) => {

    return (
        <div className={"grid"} role="grid">
            {props.rows.map((row: Tile[], i) => (
                <div className={"grid__row"} role="row" key={i}>
                    {row.map((tile, j) => (
                        <div key={`${i}-${j}`}
                            className={`${"grid__item"} ${tile.letter !== '' && "grid__item--filled"} ${tile.evaluation === 'present' && "letter-present"} ${tile.evaluation === 'correct' && "letter-correct"}`}
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
