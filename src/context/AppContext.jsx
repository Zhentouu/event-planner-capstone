import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  });

  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) || [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  function registerUser(newUser) {
    const usernameExists = users.some((user) => user.username === newUser.username);
    const emailExists = users.some((user) => user.email === newUser.email);

    if (usernameExists) {
      return { success: false, message: 'This username is already taken.' };
    }

    if (emailExists) {
      return { success: false, message: 'This email address is already registered.' };
    }

    setUsers([...users, newUser]);
    return { success: true, message: 'Account created successfully.' };
  }

  function loginUser(username, password) {
    const foundUser = users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (!foundUser) {
      return { success: false, message: 'Incorrect username or password.' };
    }

    setCurrentUser(foundUser);
    return { success: true, message: 'Logged in successfully.' };
  }

  function logoutUser() {
    setCurrentUser(null);
  }

  function addEvent(newEvent) {
    const eventWithOwner = {
      ...newEvent,
      id: Date.now(),
      username: currentUser.username,
    };

    setEvents([...events, eventWithOwner]);
  }

  const value = {
    currentUser,
    events,
    registerUser,
    loginUser,
    logoutUser,
    addEvent,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
