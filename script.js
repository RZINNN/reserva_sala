const loginForm = document.getElementById('login-form');
const forgotPasswordLink = document.getElementById('forgot-password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic
    // For simplicity, let's just display an alert
    alert(`Logged in as: ${username}`);
});

forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();

    // Replace '#' with your actual forgot password link
    window.location.href = '#forgot-password-link';
});
