import { useState } from 'react';
import { useAppContext } from './context/AppContext.jsx';
import Header from './components/Header.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import EventForm from './components/EventForm.jsx';
import Help from './components/Help.jsx';

function App() {
  const { currentUser } = useAppContext();

  // This state controls which page is shown.
  // This keeps the app simple without needing React Router.
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
      return <Help />;
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
