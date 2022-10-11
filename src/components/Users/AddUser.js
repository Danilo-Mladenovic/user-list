import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const inputUsername = usernameRef.current.value;
    const inputAge = ageRef.current.value;

    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age (non-empty values).",
      });

      return;
    }

    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (greater than 0).",
      });

      return;
    }

    props.onAddUser(inputUsername, inputAge);
    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal errorMessage={error} resetError={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
