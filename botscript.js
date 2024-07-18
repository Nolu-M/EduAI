document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            showSection(event.target.getAttribute('href').substring(1));
        });
    });

    document.getElementById('chatbot-body').style.display = 'none'; // Initially hide chatbot body
});

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleChatbot() {
    const chatbotBody = document.getElementById('chatbot-body');
    if (chatbotBody.style.display === 'none') {
        chatbotBody.style.display = 'block';
    } else {       
        chatbotBody.style.display = 'none';
    }
}

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

    fetch('chatbot.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
        errorMessage.textContent = 'Error: ' + error;
        messageContainer.appendChild(errorMessage);
    });
}
 