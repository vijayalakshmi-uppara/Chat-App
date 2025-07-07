# 💬 Real-Time Chat Application

A simple real-time chat application built using **Python**, **HTML**, **CSS**, **JavaScript**, and **SQLite**. This project allows users to register, log in, and chat in real-time through group or private messages using WebSockets.

---

## 🛠️ Technologies Used

- Python (Flask / Django)
- HTML, CSS, JavaScript
- SQLite (Database)
- WebSockets (Real-time communication)

---

## 🚀 Step-by-Step Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app

2. Create a Virtual Environment (Optional)
python -m venv venv
# Activate it
# On Windows:
venv\Scripts\activate
# On Linux/Mac:
source venv/bin/activate

3. Install Dependencies
If you have a requirements.txt file:
pip install -r requirements.txt

4. Set Up the Database
For SQLite (if using Flask SQLAlchemy):
python
>>> from app import db
>>> db.create_all()
>>> exit()

5. Run the App
python app.py

For Django:
python manage.py runserver

6. Open the App in Browser
Go to:
http://127.0.0.1:5000/  (for Flask)
http://127.0.0.1:8000/  (for Django)

Folder Structure
chat-app/
│
├── static/           # CSS and JS files
├── templates/        # HTML files
├── app.py            # Main application file
├── database.db       # SQLite database
├── requirements.txt  # Python dependencies
└── README.md         # Project documentation

Features:
User Registration & Login
Group and Private Chat
Message Timestamps
Real-time message delivery using WebSockets

