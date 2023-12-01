
document.addEventListener('DOMContentLoaded', (event) => {
  // Function to handle new project submission
  const newProjectFormHandler = async (event) => {
    event.preventDefault();

    const projectName = document.querySelector('#project-name').value.trim();
    const projectFunding = document.querySelector('#project-funding').value.trim();
    const projectDesc = document.querySelector('#project-desc').value.trim();

    if (projectName && projectFunding && projectDesc) {
      try {
        const response = await fetch('/api/projects', {
          method: 'POST',
          body: JSON.stringify({ name: projectName, needed_funding: projectFunding, description: projectDesc }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create project. Please try again.');
        }
      } catch (err) {
        console.error('Error during project creation:', err);
      }
    } else {
      alert('Please enter all fields for the project.');
    }
  };

  // Function to handle project deletion
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      try {
        const response = await fetch(`/api/projects/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to delete project. Please try again.');
        }
      } catch (err) {
        console.error('Error during project deletion:', err);
      }
    }
  };

  // Event listener for new project form submission
  document.querySelector('.new-project-form').addEventListener('submit', newProjectFormHandler);

  // Event listener for project deletion button
  document.querySelector('.project-list').addEventListener('click', delButtonHandler);
});
