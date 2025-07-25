// pages/Dashboard.jsx
function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <a href="/" onClick={() => window.location.reload()}>
        Logout
      </a>
    </div>
  );
}
