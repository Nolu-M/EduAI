function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function downloadContent(subject) {
    alert(`Downloading content for ${subject}...`);
    const link = document.createElement('a');
    link.href = `${subject}.pdf`;
    link.download = `${subject}_resources.pdf`;
    link.click();
}

function showPhysicsTopics() {
    showSection('physics-topics');
}

function showPhysicsContent(topic) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Physical Science - ${topic.charAt(0).toUpperCase() + topic.slice(1)}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <header>
                    <h1>Physical Science - ${topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>
                </header>
                <main>
                    <section>
                        <h2>What is ${topic.charAt(0).toUpperCase() + topic.slice(1)}?</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <button onclick="readMore()">Read More</button>
                        <button onclick="downloadContent('${topic}')">Download</button>
                    </section>
                </main>
            </div>
            <script>
                function readMore() {
                    alert("Redirecting to more resources...");
                }

                function downloadContent(subject) {
                    const link = document.createElement('a');
                    link.href = subject + '.pdf';
                    link.download = subject + '_resources.pdf';
                    link.click();
                }
            </script>
        </body>
        </html>
    `);
}

function openBookingForm(tutorName, subject) {
    document.getElementById('tutor-name').value = tutorName;
    document.getElementById('subject').value = subject;
    document.getElementById('booking-modal').style.display = 'flex';
}

function closeBookingForm() {
    document.getElementById('booking-modal').style.display = 'none';
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
    closeBookingForm();
});