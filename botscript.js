function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value;
    if (message.trim() === '') return;

    const messageContainer = document.getElementById('chatbot-messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = message;
    messageContainer.appendChild(userMessage);

    input.value = '';

    console.log("Sending message:", message); // Debugging log

    fetch('http://localhost:3000/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => {
        console.log('Response status:', response.status); // Log status code
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Network response was not ok: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log("Received response:", data); // Debugging log
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = data.reply;
        messageContainer.appendChild(botMessage);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Debugging log
        const errorMessage = document.createElement('div');
        errorMessage.className = 'bot-message';
        errorMessage.textContent = 'Error: ' + error.message;
        messageContainer.appendChild(errorMessage);
    });
}
