# 🚀 Internship Dashboard Prototype
A basic prototype for internship management.
This project is designed to help interns, managers, and organizations keep track of tasks, referrals, donations, and rewards in a simple web dashboard.

## ✨ Features
- 👨💻 User Authentication: Sign up, log in, and manage intern profiles.

- 🏆 Leaderboard: See top-performing interns by donations raised.

- 🎁 Referral System: Generate and use referral codes for bonuses and tracking.

- 💸 Donations Tracking: Track how much each intern has raised and unlock rewards.

- 🎖️ Rewards/Unlockables: View static rewards and eligibility.

- 📊 Dashboard UI: Clean, responsive dashboard built with React, Tailwind CSS, DaisyUI.

### 🔗 Live Demo
https://internship-1-l5aa.onrender.com/

### 📦 Tech Stack
- Frontend: React, Tailwind CSS, DaisyUI

- State Management: Zustand

- Backend: Node.js, Express.js, MongoDB (Mongoose)

- Auth: JWT, bcrypt

- Hosting: Render.com (backend), Render (frontend)

## 🚏 Getting Started
### 1. Clone the repo
```
git clone https://github.com/Vimalnegi03/Internship.git
cd Internship
```
### 2. Install dependencies
```
cd frontend
npm install
```
### 3. Backend Setup
```
cd backend
npm install
```
### 4. Configure environment
Create a .env file in your backend with:
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=7d
```
### 5. Run server & client
server :
```
npm start
```
client :
```
npm run dev
```
## 🗂️ Folder Structure
```
Internship/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── dbConnect/
│   └── ...
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── ...
│   └── ...
├── README.md
└── ...
```
## ScreenShots -:
### Dashboard-:
![Dashboard](/Dashboard.png)
### Leaderboard-:
![Leaderboard](/Leaderboard.png)
### Login-:
![Login](/Login.png)

### 📞 Contact
- Author: Vimal Negi

- GitHub: Vimalnegi03

### Note-: Cookies dont persist in render so application might not run well on render .
