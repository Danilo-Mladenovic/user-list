import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      inputUsername.trim().length === 0 ||
      inputAge.trim().length === 0 ||
      inputEmail.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please make sure to enter non-empty values in all fields.",
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

    if (!validateEmail(inputEmail)) {
      setError({
        title: "Invalid e-mail",
        message: "Please enter correct e-mail format.",
      });
    }

    props.onAddUser(inputUsername, inputAge, inputEmail);
    setInputUsername("");
    setInputAge("");
    setInputEmail("");
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
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={inputUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            onChange={emailChangeHandler}
            value={inputEmail}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
