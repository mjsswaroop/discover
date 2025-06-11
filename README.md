
# 🧭 Lost and Found Management System - DISCOVER

A web-based platform to help university students report **lost** and **found** items with real-time updates, secure login, and communication between users. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

---

## 🖼️ Preview

### 🔐 Login Page  
![Login](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/login.png)

### 🏠 Home Page (Lost/Found Posts)  
![Home](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/home.png)

### 👤 Profile Page  
![Profile](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/profile.png)

### 📝 Post Lost/Found Item  
![Post](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/post.png)

### 📂 Categories View  
![Categories](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/categories.png)

### 💬 Chat Section  
![Chat Section](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/chatsection.png)

### 🛠 Admin Panel - Users  
![Admin Users](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/admin%20frofile.png)

### 🛠 Admin Panel - Posts  
![Admin Posts](https://github.com/mjsswaroop/discover/blob/11b15eaf19477375c47f5c987fbf6419c966ee39/SDPM/screenshots/admin%20post.png)

---

## 💡 Features

- 🔐 **JWT-Based Authentication**  
- 🧾 **Lost/Found Item Reporting**  
- 🖼 **Image Uploading with Previews**  
- 📁 **Categorization** (Electronics, Documents, Cards, etc.)  
- 💬 **Real-Time Chat** between users  
- 🛠 **Admin Dashboard** for post/user management  
- 🔍 **Search & Filter** capabilities  
- 📱 **Responsive UI** with **Tailwind CSS**

---

## 🏗️ Tech Stack

| Frontend | Backend              | Database | Auth |
|----------|----------------------|----------|------|
| React.js | Node.js + Express.js | MongoDB  | JWT  |

---

## ⚙️ Installation

### 🚀 Clone the repository

```bash
git clone https://github.com/yourusername/discover-lost-found.git
cd discover-lost-found
````

### 📦 Install dependencies for client and server

```bash
# Install client
cd client
npm install

# Install server
cd ../server
npm install
```

### 🔑 Environment Variables

Create a `.env` file in `server/` directory:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

### 🏁 Run both servers

```bash
# From root folder using concurrently
npm run dev
```

---

## 🧪 Sample User Flow

* User logs in or registers
* Posts a lost/found item with image, category, and location
* Views categorized items
* Connects with item owners via chat
* Admins manage all users and posts

---

## 📸 Admin Panel

Admin can:

* View all users and posts
* Delete inappropriate content
* Monitor system activity

---

## 🔐 Authentication Flow

* 🔒 Passwords are hashed using **bcrypt**
* 🎟 JWT tokens are used for protected routes
* 👤 Session persists securely

---

## ✨ Future Enhancements

* 🔔 Notification system for responses
* 📍 Geolocation tagging
* 📱 PWA mobile version
* ⏳ Item recovery history

---

## 🙋‍♂️ Author

**Jyothi Sai Swaroop Mareedu**

---


