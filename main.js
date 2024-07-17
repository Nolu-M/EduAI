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

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    registerBtn.addEventListener('click', () => {
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
