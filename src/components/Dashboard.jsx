import { useAppContext } from '../context/AppContext.jsx';

function Dashboard({ goToAddEvent }) {
  const { currentUser, events } = useAppContext();

  const userEvents = events.filter((event) => event.username === currentUser.username);

  return (
    <section>
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {currentUser.name}</h1>
          <p>Here are your upcoming events.</p>
        </div>

        <button className="primary-button" onClick={goToAddEvent}>
          Add new event
        </button>
      </div>

      {userEvents.length === 0 ? (
        <div className="empty-card">
          <h2>No events yet</h2>
          <p>Create your first event to start organising your schedule.</p>
        </div>
      ) : (
        <div className="event-grid">
          {userEvents.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-date">
                <span>{event.date}</span>
                <strong>{event.time}</strong>
              </div>

              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <strong>Location: {event.location}</strong>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Dashboard;
