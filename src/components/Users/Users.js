import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
import Wrapper from "../Helpers/Wrapper";

const Users = (props) => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, uAge, uEmail) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: username,
          age: uAge,
          email: uEmail,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser key="" onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
};

export default Users;
