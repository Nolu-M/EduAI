function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
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



                                                                                                      