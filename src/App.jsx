import { useState } from 'react';
import Header from './components/Header.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  function renderPage() {
    if (currentPage === 'add-event') {
      return (
        <section className="content-card">
          <h1>Add Event</h1>
          <p>The event form will be added in a later checkpoint.</p>
        </section>
      );
    }

    if (currentPage === 'help') {
      return (
        <section className="content-card">
          <h1>Help</h1>
          <p>Instructions for users will be added here.</p>
        </section>
      );
    }

    return (
      <section className="content-card">
        <h1>Dashboard</h1>
        <p>The dashboard will show upcoming events once event data is added.</p>
      </section>
    );
  }

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="page-container">
        {renderPage()}
      </main>
    </>
  );
}

export default App;
