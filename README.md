# React Events

A practice project using **React 19** (frontend) + **Node.js** (backend) to build a simple events web application. The goal is to explore advanced data-fetching & mutation patterns (especially with TanStack Query), and to try newer React Router Dom features (like loaders, actions, etc.).

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Examples of Advanced Concepts](#examples-of-advanced-concepts)  
- [Future Improvements](#future-improvements)  
- [Screenshots](#screenshots)  
- [Contribution](#contribution)  
- [Contact](#contact)  

---

## Features

- Create, read, update, delete (CRUD) operations for events  
- Fetching remote data and mutating it using **TanStack Query**  
- Use of React’s latest features:
  - Loaders & Action creators  
  - React hooks  
- Backend API built in Node.js to support events endpoints  

---

## Tech Stack

| Layer       | Technologies Used |
|--------------|---------------------|
| Frontend     | React 19, React Router dom 6.15, React hooks, React loader/action patterns, TanStack Query 5.86 |
| Backend      | Node.js, Express, RESTful API endpoints |
| Data Storage | JSON files for events |

---

## Getting Started

These are the steps to get the project running locally.

1. **Clone the repo**

   ```bash
   git clone https://github.com/AqibNiazi/react-events.git
   cd react-events
````

2. **Setup the backend**

   ```bash
   cd backend
   npm install   # or yarn install
   # set environment variables if needed (e.g. PORT, DB_URL, etc.)
   npm start     # or node server.js / nodemon
````

3. **Setup the frontend**

   ```bash
   cd ../frontend
   npm install
   npm run dev   # should launch react app in development mode
   ```

4. **Open in browser**

   Usually at `http://localhost:3000` (or whatever port frontend is running) — verify it can fetch events from the backend, add/edit events, etc.

---

## Usage

* View list of events
* Add a new event via a form (title, image, details, date, etc.)
* Edit existing event(s)
* Delete events
* Form validation (basic)
* Error / loading states handled via TanStack Query (e.g. `isLoading`, `isError`)

---

## Examples of Advanced Concepts

* **TanStack Query**
  Using query keys, invalidation, optimistic updates (if implemented), caching behavior, background refetching, etc.

* **React Loaders & Actions**
  Using newer React patterns (from React Router) to define loaders that fetch data before rendering, action creators / handlers for mutations.

* **Error & Loading UI**
  Handling loading spinners, showing error messages, handling edge cases (no events, backend down, etc.)

---

## Future Improvements

* Add user authentication so only authorized users can create / edit / delete events
* Add pagination / infinite scrolling for large numbers of events

---

## Screenshots

(Add screenshots or GIFs of your app here)

---

## Contribution

Since this is mostly a personal/practice project, contributions aren’t required — but feel free to:

1. Fork the repo
2. Make your changes
3. Open a Pull Request

---

## Contact

* GitHub: [AqibNiazi](https://github.com/AqibNiazi)
* Email: [aqibjaved5201@gmail.com](mailto:aqibjaved5201@gmail.com)
