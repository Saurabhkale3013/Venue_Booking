# 🏢 Eazyvenue - Mini Venue Booking Dashboard

A full-stack web application for venue booking that allows **venue owners** to manage their listings and availability, and enables **users** to browse and book available venues.

---

## 🚀 Features

### 👤 User Side
- View all available venues
- Book a venue by selecting a date
- Auto-check availability before booking

### 🛠️ Admin/Venue Owner Side
- Add new venues
- View all owned venues
- Block specific dates (e.g., for maintenance or offline bookings)
- Automatically update availability when a venue is booked

---

## 🧱 Tech Stack

| Layer      | Technology                |
|------------|----------------------------|
| Frontend   | React + Vite              |
| Backend    | Node.js + Express         |
| Database   | MongoDB (Mongoose ODM)    |
| Styling    | CSS (custom, responsive)  |
| Tooling    | Axios, Git, GitHub        |

---

## 📦 API Endpoints

### 🧑‍💼 Admin Routes
- `GET /api/venues` – Fetch all venues
- `POST /api/venues` – Add a new venue
- `PATCH /api/venues/:id/block` – Block date(s)
- `PATCH /api/venues/:id/unblock` – Unblock date(s)

### 🙋 User Routes
- `GET /api/venues/available` – Fetch only available venues
- `POST /api/venues/:id/book` – Book venue on given date

---

## 🖥️ Screenshots

| User Page         | Admin Page        |
|-------------------|-------------------|
| ![User](./screenshots/user.png) | ![Admin](./screenshots/admin.png) |

---

## 🧠 Ideation: Future Enhancements

This section includes some advanced features I'd consider implementing in future iterations:

### 🔍 1. Capture User Search Activity
- Track user location filters, preferred cities or date ranges.
- Use this to improve search relevance or suggest popular venues.

### 📊 2. Admin Analytics Dashboard
- Visualize booking frequency, peak days, venue popularity.
- Export reports for accounting or marketing purposes.

### 📆 3. Calendar View for Venue Availability
- Integrate a calendar UI (like FullCalendar) to let admins and users see booked/unavailable days at a glance.

### 🔐 4. Basic Authentication System
- Allow login for:
  - Admins to manage venues
  - Users to track their bookings
- JWT-based session handling or OAuth integration.

---

## ⚙️ Setup Instructions

### Clone & Install Dependencies
```bash
git clone https://github.com/YOUR_USERNAME/Venue_Booking.git
cd Venue_Booking
npm install

## For Backend
cd backend
npm install
npm start

##For Frontend
cd frontend
npm install
npm run dev

