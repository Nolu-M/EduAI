<?php
header('Content-Type: application/json');

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);
$message = $data['message'];

// Simple rule-based responses
function getResponse($message) {
    $message = strtolower($message);

    if (strpos($message, 'hello') !== false || strpos($message, 'hi') !== false) {
        return "Hello! How can I assist you today?";
    } elseif (strpos($message, 'help') !== false) {
        return "Sure, I'm here to help. Please ask your question.";
    } elseif (strpos($message, 'modules') !== false) {
        return "We offer modules in Accounting, Physical Science, Mathematics, and English. Which one would you like to know more about?";
    } elseif (strpos($message, 'accounting') !== false) {
        return "Accounting covers topics like financial statements, bookkeeping, and auditing. Would you like to download the module?";
    } elseif (strpos($message, 'math') !== false) {
        return "Mathematics covers topics like algebra, calculus, and geometry. Would you like to download the module?";
    } else {
        return "I'm not sure about that. Could you please provide more details?";
    }
}

// Generate the response
$response = getResponse($message);

// Return the response as JSON
echo json_encode(['reply' => $response]);
?>
