const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/chatbot', (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const response = getResponse(message);
    res.json({ reply: response });
});

function getResponse(message) {
    message = message.toLowerCase();

    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else if (message.includes('help')) {
        return "Sure, I'm here to help. Please ask your question.";
    } else if (message.includes('modules')) {
        return "We offer modules in Accounting, Physical Science, Mathematics, and English. Which one would you like to know more about?";
    } else if (message.includes('accounting')) {
        return "Accounting covers topics like financial statements, bookkeeping, and auditing. Would you like to download the module?";
    } else if (message.includes('math')) {
        return "Mathematics covers topics like algebra, calculus, and geometry. Would you like to download the module?";
    } else {
        return "I'm not sure about that. Could you please provide more details?";
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
