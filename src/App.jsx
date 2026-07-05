import { useState } from 'react';
import { useAppContext } from './context/AppContext.jsx';
import Header from './components/Header.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import EventForm from './components/EventForm.jsx';

function App() {
  const { currentUser } = useAppContext();
  const [currentPage, setCurrentPage] = useState('login');

  function renderPage() {
    if (!currentUser) {
      if (currentPage === 'register') {
        return <RegisterForm goToLogin={() => setCurrentPage('login')} />;
      }

      return (
        <LoginForm
          goToRegister={() => setCurrentPage('register')}
          goToDashboard={() => setCurrentPage('dashboard')}
        />
      );
    }

    if (currentPage === 'add-event') {
      return <EventForm goToDashboard={() => setCurrentPage('dashboard')} />;
    }

    if (currentPage === 'help') {
      return (
        <section className="content-card">
          <h1>Help</h1>
          <p>The full help guide will be added in the final stage.</p>
        </section>
      );
    }

    return <Dashboard goToAddEvent={() => setCurrentPage('add-event')} />;
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
