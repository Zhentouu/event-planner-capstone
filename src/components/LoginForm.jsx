import { useState } from 'react';
import { useAppContext } from '../context/AppContext.jsx';

function LoginForm({ goToRegister, goToDashboard }) {
  const { loginUser } = useAppContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!username || !password) {
      setMessage('Please enter your username and password.');
      return;
    }

    const result = loginUser(username, password);
    setMessage(result.message);

    if (result.success) {
      goToDashboard();
    }
  }

  return (
    <section className="form-card">
      <h1>Log in</h1>
      <p>Access your dashboard.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username</label>
        <input
          id="login-username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {message && <p className="message">{message}</p>}

        <button className="primary-button" type="submit">Log in</button>
      </form>

      <button className="text-button" onClick={goToRegister}>
        Need an account? Register
      </button>
    </section>
  );
}

export default LoginForm;
