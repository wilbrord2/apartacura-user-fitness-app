# Apertacura App 

A fitness tracking web application where users sign in with Google, track their daily step count, and view a leaderboard showcasing top users with earned badges for motivation.

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project
 
This project provides a seamless user experience where users can sign in with Google and track their daily step count.

🔹 Key Features:</br>
✅ Google Authentication – Users can sign in securely using their Google accounts.</br>
✅ Daily Step Tracking – Displays today's step count to encourage fitness engagement.</br>
✅ Leaderboard System – Highlights top users based on their step count, motivating users to stay active.</br>
✅ Badge System – Users earn Diamond, Gold, Silver, or Bronze badges based on performance.</br>
✅ Badge-Based Filtering – Users can filter the leaderboard based on badges for easy comparison.</br>

The goal is to encourage fitness and healthy habits by providing real-time feedback and gamification through badges and leaderboards. 🚀


## Getting Started

To use this locally.

### Installation

1. Clone the repo 💫
   ```sh
   https://github.com/wilbrord2/apartacura-user-fitness-app.git
   ```
2. Install packages 📦.

   ```
   npm install
   ```
3. You have to set up your .env.local variables  

    ```
    GOOGLE_CLIENT_ID = #Add your google client id from (https://console.developers.google.com/apis/credentials)

    GOOGLE_CLIENT_SECRET = #Add your google client secrete from (https://console.developers.google.com/apis/credentials)

    NEXTAUTH_SECRET = #Add your client secret

    NEXTAUTH_URL =http://localhost:3000 if you will run this local on pot:3000

    ```

4. Start your local development server

    ```
    npm run dev
    ```
### How It Works

    1️⃣ User Signs In → Authenticated via Google.<br/>
    2️⃣ Step Tracking → Displays today's step count.<br/>
    3️⃣ Leaderboard Ranking → Ranks top users with badges.<br/>
    4️⃣ Badge Filtering → Users can filter based on badge rank.<br/>

### Dependencies

🚀 Built with using Next.js, Tailwind CSS & NextAuth.js
