import { useAppContext } from '../context/AppContext.jsx';
import EventCard from './EventCard.jsx';

function Dashboard({ goToAddEvent }) {
  const { currentUser, events } = useAppContext();

  const userEvents = events
    .filter((event) => event.username === currentUser.username)
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

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
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Dashboard;
