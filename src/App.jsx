import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/LoginForm";
import OrderSuccess from "./pages/OrderSuccess"; // 👈 import this


function App() {
  const [user, setUser] = useState(null); // For login/logout

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} /> : <LoginForm setUser={setUser} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
