import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.resetError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorMessage.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.errorMessage.message}</p>
        </div>

        <footer className={classes.actions}>
          <Button className={classes.button1} onClick={props.resetError}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
