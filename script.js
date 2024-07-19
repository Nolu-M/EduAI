// script.js

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section, section.hidden');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.style.display = 'none';
    });
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
        sectionToShow.style.display = 'block';
    }
}

function downloadContent(subject) {
    alert(`Downloading content for ${subject}...`);
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

function readMore(topic) {
    // Hide all topic sections
    document.querySelectorAll('section.hidden').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected topic section
    document.getElementById(topic).style.display = 'block';

    // Hide the main topics section
    document.getElementById('topics').style.display = 'none';
}

function goBack() {
    // Hide all topic sections
    document.querySelectorAll('section.hidden').forEach(section => {
        section.style.display = 'none';
    });

    // Show the main topics section
    document.getElementById('topics').style.display = 'block';
}
