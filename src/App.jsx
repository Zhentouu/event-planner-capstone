function App() {
  return (
    <>
      <header className="app-header">
        <div className="logo">Event Planner</div>

        <nav className="nav-menu">
          <a href="#dashboard">Dashboard</a>
          <a href="#add-event">Add Event</a>
          <a href="#help">Help</a>
        </nav>
      </header>

      <main className="page-container">
        <section className="hero-card">
          <h1>Personal Event Planner</h1>
          <p>
            This app will help users organise personal and professional events.
          </p>
        </section>

        <section className="placeholder-grid">
          <div>
            <h2>Dashboard</h2>
            <p>Upcoming events will be displayed here.</p>
          </div>

          <div>
            <h2>Add Event</h2>
            <p>A form will be added here later.</p>
          </div>

          <div>
            <h2>Help</h2>
            <p>User instructions will be added here.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
