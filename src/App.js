import React, { useState, useEffect } from "react";

import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoginInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoginInfo === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
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
