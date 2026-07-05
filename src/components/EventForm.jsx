import { useState } from 'react';
import { useAppContext } from '../context/AppContext.jsx';

function EventForm({ eventToEdit, stopEditing, goToDashboard }) {
  const { addEvent, updateEvent } = useAppContext();

  const [formData, setFormData] = useState({
    name: eventToEdit ? eventToEdit.name : '',
    date: eventToEdit ? eventToEdit.date : '',
    time: eventToEdit ? eventToEdit.time : '',
    description: eventToEdit ? eventToEdit.description : '',
    location: eventToEdit ? eventToEdit.location : '',
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

    if (eventToEdit) {
      updateEvent({
        ...eventToEdit,
        ...formData,
      });

      stopEditing();
      return;
    }

    addEvent(formData);
    goToDashboard();
  }

  return (
    <section className={eventToEdit ? 'edit-card' : 'form-card'}>
      <h1>{eventToEdit ? 'Edit event' : 'Add a new event'}</h1>
      <p>
        {eventToEdit
          ? 'Update the details for this event.'
          : 'Add the details for your appointment, meeting or social event.'}
      </p>

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

        <div className="form-actions">
          <button className="primary-button" type="submit">
            {eventToEdit ? 'Save changes' : 'Add event'}
          </button>

          {eventToEdit && (
            <button type="button" onClick={stopEditing}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default EventForm;
