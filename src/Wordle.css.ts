import {style, keyframes} from "@vanilla-extract/css";

export const container = style({
    padding: 10,
    background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(22,22,22,1) 60%, rgba(44,44,44,1) 90%)',
    height: '100vh',
    color: 'white',
    display: 'flex',
    justifyContent: "space-evenly",
    gap: '2rem'
});

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
});

export const header = style({
    textAlign: 'center'
});

export const footer = style({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto'
});

export const author = style({
    textAlign: 'center'
});

export const gameInstructions = style({
    minWidth: '30rem',
    maxWidth: '40rem',
    textAlign: 'center',
    marginTop: '1rem'
});

export const themeClass = style({
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: "white"
});

export const grid = style({
    display: "flex",
    flexDirection: 'column',
    minWidth: '25rem',
    maxWidth: '30rem',
    minHeight: '25rem',
    maxHeight: '30rem',
    alignSelf: 'center',
    marginTop: '1.2rem'
});

export const gridRow = style({
    display: 'flex',
    justifyContent: 'center',
    minWidth: '25rem',
    maxWidth: '30rem'
});

export const gridItem = style({
    border: '2px solid #3b3b3c',
    borderRadius: '0.4rem',
    color: 'white',
    padding: '1px',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.6rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '0.3rem'
});

const fadeInAnimation = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
});

export const gridItemFilled = style({
    backgroundColor: '#333335',
    animation: `${fadeInAnimation} 0.2s`,
});

export const letterPresent = style({
    backgroundColor: '#b59535',
});

export const letterCorrect = style({
    backgroundColor: '#498245',
});

export const modal = style({
    background: '#282626',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '18rem',
    minWidth: '20rem',
    maxHeight: '18rem',
    maxWidth: '22rem',
    borderRadius: '0.6rem',
    padding: '2.5rem 1rem 1.5rem 1rem',
    marginTop: '12rem',
    animation: `${fadeInAnimation} 1s`,
    color: 'white',
    border: 'none'
});

export const gameResults = style({
    textAlign: 'center',
});

export const emoji = style({
    display: "flex",
    fontSize: '5rem',
    alignItems: 'center',
    justifyContent: 'center'
});

export const modalButton = style({
    background: '#3f82f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2rem',
    width: '100%',
    borderRadius: '0.4rem',
    outline: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
});