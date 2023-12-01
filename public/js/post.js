
document.addEventListener('DOMContentLoaded', (event) => {
  // Function to handle post submission
  const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create post. Please try again.');
        }
      } catch (err) {
        console.error('Error during post creation:', err);
      }
    } else {
      alert('Please enter both title and content for the post.');
    }
  };

  // Event listener for post form submission
  document.querySelector('.post-form').addEventListener('submit', postFormHandler);
});
