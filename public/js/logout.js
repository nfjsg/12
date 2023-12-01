
document.addEventListener('DOMContentLoaded', (event) => {
  // Logout function
  const logoutHandler = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during logout:', err);
    }
  };

  // Event listener for logout button
  document.querySelector('#logout').addEventListener('click', logoutHandler);
});
