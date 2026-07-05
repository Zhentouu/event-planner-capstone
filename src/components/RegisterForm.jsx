import { useState } from 'react';
import { useAppContext } from '../context/AppContext.jsx';

function RegisterForm({ goToLogin }) {
  const { registerUser } = useAppContext();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.username || !formData.password) {
      setMessage('Please complete all fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const result = registerUser(formData);
    setMessage(result.message);

    if (result.success) {
      goToLogin();
    }
  }

  return (
    <section className="form-card">
      <h1>Create an account</h1>
      <p>Register to start planning your events.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />

        {message && <p className="message">{message}</p>}

        <button className="primary-button" type="submit">Register</button>
      </form>

      <button className="text-button" onClick={goToLogin}>
        Already have an account? Log in
      </button>
    </section>
  );
}

export default RegisterForm;
