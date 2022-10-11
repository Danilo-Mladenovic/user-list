import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser key="" onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
