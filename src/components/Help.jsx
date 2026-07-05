function Help() {
  return (
    <section className="help-card">
      <h1>Help guide</h1>
      <p>This page explains how to use the Personal Event Planner app.</p>

      <div className="help-section">
        <h2>1. Register an account</h2>
        <p>
          Click Register and enter your name, email address, username and password.
          Every field must be completed and the email address must be in the correct format.
        </p>
      </div>

      <div className="help-section">
        <h2>2. Log in</h2>
        <p>
          After registering, log in with your username and password.
          This takes you to your dashboard.
        </p>
      </div>

      <div className="help-section">
        <h2>3. Add an event</h2>
        <p>
          Click Add Event in the header. Add the event name, date, time,
          description and location.
        </p>
      </div>

      <div className="help-section">
        <h2>4. Edit or delete events</h2>
        <p>
          On the dashboard, each event card has Edit and Delete buttons.
          Edit updates the event details. Delete removes the event from the app.
        </p>
      </div>

      <div className="help-section">
        <h2>5. Tips for organising events</h2>
        <ul>
          <li>Use clear event names.</li>
          <li>Add locations so you know where you need to be.</li>
          <li>Write helpful descriptions for important notes.</li>
          <li>Delete cancelled events so your dashboard stays clean.</li>
        </ul>
      </div>
    </section>
  );
}

export default Help;
