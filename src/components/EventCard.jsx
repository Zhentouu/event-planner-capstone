import { useState } from 'react';
import { useAppContext } from '../context/AppContext.jsx';
import EventForm from './EventForm.jsx';

function EventCard({ event }) {
  const { deleteEvent } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <EventForm
        eventToEdit={event}
        stopEditing={() => setIsEditing(false)}
      />
    );
  }

  return (
    <article className="event-card">
      <div className="event-date">
        <span>{event.date}</span>
        <strong>{event.time}</strong>
      </div>

      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <strong>Location: {event.location}</strong>

      <div className="card-actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button className="danger-button" onClick={() => deleteEvent(event.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default EventCard;
