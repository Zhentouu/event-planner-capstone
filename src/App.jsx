import { useState } from 'react';
import { useAppContext } from './context/AppContext.jsx';
import Header from './components/Header.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';

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

    if (currentPage === 'help') {
      return (
        <section className="content-card">
          <h1>Help</h1>
          <p>The full help guide will be added later.</p>
        </section>
      );
    }

    return (
      <section className="content-card">
        <h1>Welcome, {currentUser.name}</h1>
        <p>Your event dashboard will be added in the next stage.</p>
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
