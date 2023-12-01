
document.addEventListener('DOMContentLoaded', (event) => {
  // Login form handler
  const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Login failed. Please check your credentials and try again.');
        }
      } catch (err) {
        console.error('Error during login:', err);
      }
    }
  };

  // Event listener for login form
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
});
