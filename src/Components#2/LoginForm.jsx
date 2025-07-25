// components/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim()) {
      setUser(username);
      navigate("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
