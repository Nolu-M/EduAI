// Function to handle acceptance of a request
        function acceptRequest(button) {
            alert('Request Accepted!');
            // Add further actions like redirecting to the calendar
        }

        // Function to handle rejection of a request
        function rejectRequest(button) {
            alert('Request Rejected. Please reschedule.');
            // Add further actions like redirecting to a rescheduling page
        }

        document.addEventListener('DOMContentLoaded', function() {
            const resourceLibrary = document.getElementById('resource-library');
            const assessmentTools = document.getElementById('assessment-tools');
            const improvementManagement = document.getElementById('improvement-management');
            const modal = document.getElementById('uploadModal');
            const closeModal = document.querySelector('.close');
            
            function openModal() {
                modal.style.display = 'block';
            }
            
            resourceLibrary.addEventListener('click', openModal);
            assessmentTools.addEventListener('click', openModal);
            improvementManagement.addEventListener('click', openModal);
            
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        
            document.getElementById('uploadButton').addEventListener('click', function() {
                const fileInput = document.getElementById('fileUpload');
                const files = fileInput.files;
                if (files.length > 0) {
                    // Implement the logic to handle file upload here
                    alert('Files uploaded successfully!');
                }
            });
        });
        

        
        let selectedDayElem = null;

        // Function to generate the calendar for a given month and year
        function generateCalendar(month, year) {
            const calendarGrid = document.getElementById('calendar-grid');
            calendarGrid.innerHTML = ''; // Clear previous content
        
            // Array of days of the week
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            daysOfWeek.forEach(day => {
                const dayElem = document.createElement('div');
                dayElem.className = 'calendar-day header';
                dayElem.textContent = day;
                calendarGrid.appendChild(dayElem);
            });
        
            // Get the first day of the month
            const firstDay = new Date(year, month, 1).getDay();
            // Get the number of days in the month
            const daysInMonth = new Date(year, month + 1, 0).getDate();
        
            // Add empty cells for the days before the first day
            for (let i = 0; i < firstDay; i++) {
                const emptyElem = document.createElement('div');
                emptyElem.className = 'calendar-day empty';
                calendarGrid.appendChild(emptyElem);
            }
        
            // Add the days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElem = document.createElement('div');
                dayElem.className = 'calendar-day';
                dayElem.textContent = day;
        
                // Add click event to each day
                dayElem.onclick = function () {
                    if (dayElem.classList.contains('available') || dayElem.classList.contains('unavailable')) {
                        // If already marked, clear the color
                        dayElem.classList.remove('available', 'unavailable');
                        dayElem.style.backgroundColor = ''; // Reset background color
                    } else {
                        // If not marked, show the availability modal
                        selectedDayElem = dayElem;
                        showAvailabilityModal();
                    }
                };
        
                calendarGrid.appendChild(dayElem);
            }
        }
        
        // Function to show the availability modal
        function showAvailabilityModal() {
            const availabilityModal = document.getElementById('availabilityModal');
            availabilityModal.style.display = "block";
        }
        
        // Function to set the availability of a day
        function setAvailability(isAvailable) {
            if (selectedDayElem) {
                if (isAvailable) {
                    selectedDayElem.classList.add('available');
                } else {
                    selectedDayElem.classList.add('unavailable');
                }
                selectedDayElem.style.backgroundColor = isAvailable ? '#28a745' : '#dc3545'; // Set color
            }
        
            // Close the availability modal
            const availabilityModal = document.getElementById('availabilityModal');
            availabilityModal.style.display = "none";
        }
        
        // Initialize calendar with default month and year
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        generateCalendar(currentMonth, currentYear);
        
        // Event listener for month change
        document.getElementById('month-select').addEventListener('change', function () {
            const month = parseInt(this.value);
            const year = parseInt(document.getElementById('year').textContent);
            generateCalendar(month, year);
        });
        
        // Get the modal elements
        const modal = document.getElementById("calendarModal");
        const availabilityModal = document.getElementById('availabilityModal');
        const btn = document.getElementById("calenderBtn");
        const closeButtons = document.getElementsByClassName("close");
        
        // When the user clicks the button, open the calendar modal
        btn.onclick = function () {
            modal.style.display = "block";
        }
        
        // Close modals when clicking the 'x' button or outside the modal
        for (let closeButton of closeButtons) {
            closeButton.onclick = function () {
                modal.style.display = "none";
                availabilityModal.style.display = "none";
            }
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            } else if (event.target == availabilityModal) {
                availabilityModal.style.display = "none";
            }
        }
