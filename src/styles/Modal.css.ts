import {style, keyframes} from "@vanilla-extract/css";

const fadeInAnimation = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
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
    border: 'none',
    justifyContent: 'space-around'
});

export const modalHeader = style({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
});

export const modalHeaderContent = style({
    fontSize: '1.6rem',
});

export const modalFooter = style({
    
});

export const modalBody = style({
    textAlign: 'center'
});


export const modalBodyContent = style({
    fontSize: '1rem',
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


export const modalFooterContent = style({

});
