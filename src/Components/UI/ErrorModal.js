import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return(
        <div>
        <div className={classes.backdrop} onClick={props.toggleError
        }></div>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.content}</p>
            </div>
            <footer className={classes.action}>
            <Button onClick={props.toggleError}>Close</Button>
            </footer>
        </Card>
        </div>
    )
}

export default ErrorModal;