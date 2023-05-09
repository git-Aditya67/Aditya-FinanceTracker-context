import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useContext, useState } from "react";
import { UsersContext } from "./context/userContext";
import Login from "./pages/Login/Login";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <UsersContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UsersContext.Provider>
  );
}

export default App;
