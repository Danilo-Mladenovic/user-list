import React, { useState } from "react";

import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Wrapper>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Users onLogout={logoutHandler} />}
      </main>
    </Wrapper>
  );
}

export default App;
