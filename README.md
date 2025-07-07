# 💬 Python ChatApp

A minimal yet powerful web-based chat application built with Flask, SQLite, and vanilla JavaScript. Messages are persisted in a local SQLite database, styled with modern CSS, and served through Flask’s templating engine.

> Created with love, caffeine ☕, and a lot of curly braces.

## 📸 Preview

![image](https://github.com/user-attachments/assets/b60bf237-3862-4cb6-98ef-74fd0126721f)


## 🧩 Features

- Full-stack app with persistent data storage using SQLite  
- Real-time feeling through JS-based polling  
- Beautiful UI with CSS animations and responsive layout  
- Smart error handling (user input validation, network feedback)  
- Easily extensible (authentication, chat rooms, emoji support)  

## 🗃 Folder Structure

ChatApp/
├── static/  
│   ├── script.js          – Async fetch, auto-refreshing, DOM updates  
│   └── style.css          – Modern responsive styles with animations  
├── templates/  
│   └── index.html         – Jinja2-rendered chat interface  
├── app.py                 – Main Flask app, APIs, DB logic  
├── database.db            – SQLite database for message persistence  
├── requirements.txt       – Flask + SQLAlchemy  
└── README.md              – This file  

## 🚀 Getting Started

1. Clone the project  
   git clone https://github.com/yourusername/chatapp.git  
   cd chatapp  

2. Create a virtual environment (optional)  
   python -m venv venv  
   source venv/bin/activate   (Windows: venv\Scripts\activate)  

3. Install dependencies  
   pip install -r requirements.txt  

4. Run the app  
   python app.py  

Then go to http://127.0.0.1:5000/ in your browser.

## 🛠 Technologies Used

Frontend: HTML, CSS, JavaScript  
Backend: Python + Flask  
Database: SQLite + SQLAlchemy  
Tools: VS Code with SQLite Extension  

## 📋 API Endpoints

- GET / → Renders the chat interface  
- GET /messages → Returns all messages in JSON  
- POST /send → Accepts new message in JSON  

## 🧪 Example Requirements

Flask  
Flask-SQLAlchemy  

To pin exact versions:  
pip freeze > requirements.txt  

## 🔧 SQLite with VS Code

- Open database.db with SQLite extension in VS Code  
- View chat history or run queries directly
-  Verification Steps:
-  Check Database Creation:
-  After running the app, look for database.db in your project root
-  You should see it appear when the app starts
-  Check VS Code SQLite Extension:
-  Stop the Flask app (Ctrl+C in terminal)
-  In VS Code:
-  Press Ctrl+Shift+P
- Type "SQLite: Open Database"
- Select database.db
- Expand Tables → message
- Right-click → "Show Table"
- Test the Application:
- Run the app: python app.py
- Visit http://localhost:5000
- Send a test message
- Verify it appears in the chat interface
- Check the database table through VS Code SQLite extension

## 👨‍💻 Developer Notes

- database.db is auto-created on first run  
- Messages are timestamped using UTC  
- CSS supports styled bubbles for sent/received
