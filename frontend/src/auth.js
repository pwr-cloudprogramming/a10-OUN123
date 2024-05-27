document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const verifyForm = document.getElementById('verify-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                const message = await response.text();
                alert(message);
                if (response.ok) {
                    // Save the email in localStorage for the verification step
                    localStorage.setItem('emailForVerification', email);
                    // Redirect to the verification page
                    window.location.href = '/verify.html';
                }
            } catch (err) {
                alert(`Error during registration: ${err.message}`);
            }
        });
    }

    if (verifyForm) {
        verifyForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = localStorage.getItem('emailForVerification'); // Retrieve the email from localStorage
            const code = document.getElementById('verify-code').value;
            try {
                const response = await fetch('http://localhost:3000/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, code }),
                });
                const message = await response.text();
                alert(message);
                if (response.ok) {
                    // Redirect to the login page after successful verification
                    window.location.href = '/login.html';
                }
            } catch (err) {
                alert(`Error during verification: ${err.message}`);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                const data = await response.json();
                localStorage.setItem('accessToken', data.token);
                window.location.href = '/game.html';
            } catch (err) {
                alert(`Error during login: ${err.message}`);
            }
        });
    }
});
