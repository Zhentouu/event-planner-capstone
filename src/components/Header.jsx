import { useAppContext } from '../context/AppContext.jsx';

function Header({ currentPage, setCurrentPage }) {
  const { currentUser, logoutUser } = useAppContext();

  function handleNavigation(event, page) {
    event.preventDefault();
    setCurrentPage(page);
  }

  function handleLogout() {
    logoutUser();
    setCurrentPage('login');
  }

  return (
    <header className="app-header">
      <div className="logo">Event Planner</div>

      <nav className="nav-menu">
        {currentUser ? (
          <>
            <a href="#dashboard" className={currentPage === 'dashboard' ? 'active' : ''} onClick={(event) => handleNavigation(event, 'dashboard')}>
              Dashboard
            </a>
            <a href="#add-event" className={currentPage === 'add-event' ? 'active' : ''} onClick={(event) => handleNavigation(event, 'add-event')}>
              Add Event
            </a>
            <a href="#help" className={currentPage === 'help' ? 'active' : ''} onClick={(event) => handleNavigation(event, 'help')}>
              Help
            </a>
            <button onClick={handleLogout}>Log out</button>
          </>
        ) : (
          <>
            <a href="#login" className={currentPage === 'login' ? 'active' : ''} onClick={(event) => handleNavigation(event, 'login')}>
              Login
            </a>
            <a href="#register" className={currentPage === 'register' ? 'active' : ''} onClick={(event) => handleNavigation(event, 'register')}>
              Register
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
