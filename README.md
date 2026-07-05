# Personal Event Planner - React Capstone Project

## Project description

This is a simple personal event planner built with React and Vite.

The app allows users to register, log in, view their dashboard, add events, edit events and delete events.

The project uses the React Context API to manage user login status and event data across the app.

## Features

- User registration with validation
- User login
- Fixed navigation header
- Dashboard showing upcoming events
- Add new events
- Edit existing events
- Delete events
- Help page with user guidance
- Responsive design for desktop and mobile
- Data saved in localStorage so the app remembers users and events after refreshing

## Technologies used

- React
- Vite
- JavaScript
- HTML
- CSS
- Context API
- localStorage

## How to install and run the app

1. Open the project folder in VS Code.

2. Open the terminal in the project folder.

3. Install the required packages:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local link shown in the terminal, usually:

```bash
http://localhost:5173/
```

## How to use the app

1. Click **Register** and create an account.
2. Log in using your username and password.
3. Go to **Add Event** to create a new event.
4. View your events on the **Dashboard**.
5. Use **Edit** to update an event.
6. Use **Delete** to remove an event.
7. Visit the **Help** page for guidance.

## File structure

```text
event-planner-capstone/
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── context/
    │   └── AppContext.jsx
    └── components/
        ├── Dashboard.jsx
        ├── EventCard.jsx
        ├── EventForm.jsx
        ├── Header.jsx
        ├── Help.jsx
        ├── LoginForm.jsx
        └── RegisterForm.jsx
```

## Suggested final commit message

```bash
git commit -m "Add responsive styling help page and README documentation"
```

## Notes for the code reviewer

The app has been kept simple on purpose so the code is easy to understand.  
The Context API stores the current user, registered users and event list.  
The app also uses localStorage so data does not disappear after refreshing the browser.
