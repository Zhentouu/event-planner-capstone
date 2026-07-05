function Header({ currentPage, setCurrentPage }) {
  function handleNavigation(event, page) {
    event.preventDefault();
    setCurrentPage(page);
  }

  return (
    <header className="app-header">
      <div className="logo">Event Planner</div>

      <nav className="nav-menu">
        <a
          href="#dashboard"
          className={currentPage === 'dashboard' ? 'active' : ''}
          onClick={(event) => handleNavigation(event, 'dashboard')}
        >
          Dashboard
        </a>

        <a
          href="#add-event"
          className={currentPage === 'add-event' ? 'active' : ''}
          onClick={(event) => handleNavigation(event, 'add-event')}
        >
          Add Event
        </a>

        <a
          href="#help"
          className={currentPage === 'help' ? 'active' : ''}
          onClick={(event) => handleNavigation(event, 'help')}
        >
          Help
        </a>
      </nav>
    </header>
  );
}

export default Header;
