document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');
    const logoutBtn = document.getElementById('logout-btn');
    const profileBtn = document.getElementById('profile-btn');
    const profileModal = document.getElementById('profile-modal');
    const closeProfile = document.getElementById('close-profile');
    const dashboard = document.getElementById('dashboard');

    // Hide both modals initially
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';

    loginBtn.addEventListener('click', () => {
        // Hide the registration modal if it's open
        if (registerModal.style.display === 'block') {
            registerModal.style.display = 'none';
        }
        loginModal.style.display = 'block';
    });

    registerBtn.addEventListener('click', () => {
        // Hide the login modal if it's open
        if (loginModal.style.display === 'block') {
            loginModal.style.display = 'none';
        }
        registerModal.style.display = 'block';
    });

    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    closeRegister.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target === registerModal) {
            registerModal.style.display = 'none';
        } else if (event.target === profileModal) {
            profileModal.style.display = 'none';
        }
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const country = document.getElementById('country').value;
        const phone = document.getElementById('phone').value;

        const usernamePattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        const phonePattern = {
            'us': /^\+1[0-9]{10}$/,
            'za': /^\+27[0-9]{9}$/,
            'ng': /^\+234[0-9]{10}$/,
            'sz': /^\+268[0-9]{8}$/,
            'cn': /^\+86[0-9]{11}$/,
            'uk': /^\+44[0-9]{10}$/
        };

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!username.match(usernamePattern)) {
            alert('Username must contain at least one number and one letter, and be at least 6 characters long');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email');
            return;
        }

        if (!country) {
            alert('Please select your country');
            return;
        }

        if (!phone.match(phonePattern[country])) {
            alert('Please enter a valid phone number with the correct country code');
            return;
        }

        alert('Registration successful!');
        registerModal.style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username === 'admin' && password === '012546') {
            alert('Login successful as admin!');
        } else {
            alert('Login successful!');
        }

        loginModal.style.display = 'none';
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        profileBtn.style.display = 'block';
        dashboard.style.display = 'block';
    });

    logoutBtn.addEventListener('click', () => {
        logoutBtn.style.display = 'none';
        profileBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        dashboard.style.display = 'none';
        alert('Logged out successfully!');
    });

    profileBtn.addEventListener('click', () => {
        profileModal.style.display = 'block';
    });

    closeProfile.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });

    document.getElementById('profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('profile-password').value;
        const confirmPassword = document.getElementById('profile-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        alert('Profile updated successfully!');
        profileModal.style.display = 'none';
    });
});


//change naybar styles on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

//show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus"
        }
    })
})

// JavaScript to handle modal interactions 
document.addEventListener('DOMContentLoaded', () => {
    const tutorBtn = document.getElementById('login-tutor-btn');
    const studentBtn = document.getElementById('register-student-btn');
    const loginModal = document.getElementById('login-modal');
    const tutorRegisterModal = document.getElementById('register-tutor-modal');
    const studentRegisterModal = document.getElementById('register-student-modal');
    const closeLogin = document.getElementById('close-login');
    const closeTutorRegister = document.getElementById('close-register-tutor');
    const closeStudentRegister = document.getElementById('close-register-student');
    const registerLink = document.getElementById('register-link');
    const registerBtn = document.getElementById('register-btn'); // New Register button reference

    let currentRole = ''; // Track current role (tutor or student)

    // Display login modal and set registration type for Tutor
    tutorBtn.onclick = () => {
        currentRole = 'tutor'; // Set role to tutor
        loginModal.style.display = 'block';
        registerLink.innerHTML = '<a href="#" id="register-tutor-link">Not registered? Sign up as a Tutor</a>';

        // Use setTimeout to ensure the DOM is updated before attaching event
        setTimeout(() => {
            const registerTutorLink = document.getElementById('register-tutor-link');
            if (registerTutorLink) {
                registerTutorLink.onclick = (event) => {
                    event.preventDefault();
                    loginModal.style.display = 'none';
                    tutorRegisterModal.style.display = 'block';
                };
            }
        }, 0);
    };

    // Display login modal and set registration type for Student
    studentBtn.onclick = () => {
        currentRole = 'student'; // Set role to student
        loginModal.style.display = 'block';
        registerLink.innerHTML = '<a href="#" id="register-student-link">Not registered? Sign up as a Student</a>';

        // Use setTimeout to ensure the DOM is updated before attaching event
        setTimeout(() => {
            const registerStudentLink = document.getElementById('register-student-link');
            if (registerStudentLink) {
                registerStudentLink.onclick = (event) => {
                    event.preventDefault();
                    loginModal.style.display = 'none';
                    studentRegisterModal.style.display = 'block';
                };
            }
        }, 0);
    };

    // Handle "Register" button inside the login modal
    registerBtn.onclick = () => {
        loginModal.style.display = 'none'; // Close login modal
        if (currentRole === 'tutor') {
            tutorRegisterModal.style.display = 'block'; // Open tutor registration modal
        } else if (currentRole === 'student') {
            studentRegisterModal.style.display = 'block'; // Open student registration modal
        }
    };

    // Close modals
    closeLogin.onclick = () => { loginModal.style.display = 'none'; };
    closeTutorRegister.onclick = () => { tutorRegisterModal.style.display = 'none'; };
    closeStudentRegister.onclick = () => { studentRegisterModal.style.display = 'none'; };

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === loginModal) loginModal.style.display = 'none';
        if (event.target === tutorRegisterModal) tutorRegisterModal.style.display = 'none';
        if (event.target === studentRegisterModal) studentRegisterModal.style.display = 'none';
    };
});
