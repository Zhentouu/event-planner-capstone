import { useState } from 'react';
import { useAppContext } from '../context/AppContext.jsx';

function EventForm({ goToDashboard }) {
  const { addEvent } = useAppContext();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    description: '',
    location: '',
  });

  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.date || !formData.time || !formData.description || !formData.location) {
      setMessage('Please complete every event field.');
      return;
    }

    addEvent(formData);
    goToDashboard();
  }

  return (
    <section className="form-card">
      <h1>Add a new event</h1>
      <p>Add the details for your appointment, meeting or social event.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="event-name">Event name</label>
        <input id="event-name" name="name" type="text" value={formData.name} onChange={handleChange} />

        <label htmlFor="event-date">Date</label>
        <input id="event-date" name="date" type="date" value={formData.date} onChange={handleChange} />

        <label htmlFor="event-time">Time</label>
        <input id="event-time" name="time" type="time" value={formData.time} onChange={handleChange} />

        <label htmlFor="event-description">Description</label>
        <textarea id="event-description" name="description" value={formData.description} onChange={handleChange} />

        <label htmlFor="event-location">Location</label>
        <input id="event-location" name="location" type="text" value={formData.location} onChange={handleChange} />

        {message && <p className="message">{message}</p>}

        <button className="primary-button" type="submit">Add event</button>
      </form>
    </section>
  );
}

export default EventForm;
