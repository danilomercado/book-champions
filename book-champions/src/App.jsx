import React, { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router";
import Protected from "./components/protected/Protected";
import Login from "./components/auth/login/Login";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Protected isSignedIn={loggedIn}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route path="login" element={<Login onLogin={handleLoggedIn} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
