async function sendMessage() {
    const username = document.getElementById('username').value;
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    const statusDiv = document.getElementById('status');
    
    if (!username || !message) {
        statusDiv.textContent = 'Please enter both username and message';
        statusDiv.style.color = 'red';
        return;
    }
    
    statusDiv.textContent = 'Sending...';
    statusDiv.style.color = 'blue';
    
    try {
        const response = await fetch('/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, content: message })
        });
        
        const result = await response.json();
        
        if (result.success) {
            statusDiv.textContent = 'Message sent!';
            statusDiv.style.color = 'green';
            messageInput.value = '';
            loadMessages();
        } else {
            statusDiv.textContent = `Error: ${result.error || 'Failed to send message'}`;
            statusDiv.style.color = 'red';
        }
        
        // Clear status after 3 seconds
        setTimeout(() => statusDiv.textContent = '', 3000);
    } catch (error) {
        console.error('Error:', error);
        statusDiv.textContent = 'Network error. Please try again.';
        statusDiv.style.color = 'red';
        setTimeout(() => statusDiv.textContent = '', 3000);
    }
}

async function loadMessages() {
    try {
        const response = await fetch('/messages');
        const messages = await response.json();
        
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML = '';
        
        messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.username === document.getElementById('username').value ? 'sent' : 'received'}`;
            
            messageDiv.innerHTML = `
                <span class="meta">${msg.username} <span class="time">${msg.timestamp}</span></span>
                <div class="content">${msg.content}</div>
            `;
            chatBox.appendChild(messageDiv);
        });
        
        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error('Error loading messages:', error);
    }
}

// Initial load and refresh every 2 seconds
loadMessages();
setInterval(loadMessages, 2000);

// Send message on Enter key
document.getElementById('message').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});