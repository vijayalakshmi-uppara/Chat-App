from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
# Database will be created in your project root
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Suppresses a warning
db = SQLAlchemy(app)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    content = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

# Create database and tables if they don't exist
def initialize_database():
    with app.app_context():
        db.create_all()

# Initialize the database when the app starts
initialize_database()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send_message():
    try:
        data = request.get_json()
        new_message = Message(
            username=data['username'],
            content=data['content']
        )
        db.session.add(new_message)
        db.session.commit()
        return jsonify(success=True, message="Message sent")
    except Exception as e:
        return jsonify(success=False, error=str(e)), 500

@app.route('/messages')
def get_messages():
    messages = Message.query.order_by(Message.timestamp.asc()).all()
    return jsonify([{
        'id': msg.id,
        'username': msg.username,
        'content': msg.content,
        'timestamp': msg.timestamp.strftime("%H:%M:%S")
    } for msg in messages])

if __name__ == '__main__':
    app.run(debug=True)