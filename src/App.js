import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

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
    <div>
      <AddUser key="" onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
