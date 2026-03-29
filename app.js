
// Import necessary libraries and set up the document
document.addEventListener('DOMContentLoaded', () => {
  // Get all the elements we need
  const navbar = document.querySelector('#navbar');
  const heroSection = document.querySelector('#hero-section');
  const loginForm = document.querySelector('#login-form');
  const cardsGrid = document.querySelector('#cards-grid');
  const modal = document.querySelector('#modal');
  const footer = document.querySelector('#footer');

  // Set up event listeners for the navbar
  navbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Set up event listeners for the hero section
  heroSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('login-button')) {
      e.preventDefault();
      toggleModal();
    }
  });

  // Set up event listeners for the login form
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    validateForm(username, password);
  });

  // Set up event listeners for the cards grid
  cardsGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-link')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Set up event listeners for the modal
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-button')) {
      e.preventDefault();
      toggleModal();
    }
  });

  // Set up event listeners for the footer
  footer.addEventListener('click', (e) => {
    if (e.target.classList.contains('social-link')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.open(href, '_blank');
    }
  });

  // Function to toggle the modal
  function toggleModal() {
    modal.classList.toggle('hidden');
  }

  // Function to validate the form
  function validateForm(username, password) {
    if (username === '' || password === '') {
      displayError('Please fill in all fields');
    } else {
      // Check if the username and password are valid
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (username === storedUsername && password === storedPassword) {
        displaySuccess('Login successful');
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
      } else {
        displayError('Invalid username or password');
      }
    }
  }

  // Function to display an error message
  function displayError(message) {
    const errorMessage = document.querySelector('#error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 3000);
  }

  // Function to display a success message
  function displaySuccess(message) {
    const successMessage = document.querySelector('#success-message');
    successMessage.textContent = message;
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }

  // Function to animate the login form
  function animateLoginForm() {
    const loginFormContainer = document.querySelector('#login-form-container');
    loginFormContainer.classList.add('animate');
    setTimeout(() => {
      loginFormContainer.classList.remove('animate');
    }, 1000);
  }

  // Function to set up the glass effect background
  function setupGlassEffect() {
    const glassEffectContainer = document.querySelector('#glass-effect-container');
    glassEffectContainer.style.backdropFilter = 'blur(20px)';
    glassEffectContainer.style.background = 'rgba(255, 255, 255, 0.04)';
  }

  // Function to set up the responsive design
  function setupResponsiveDesign() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
      // Add styles for mobile devices
      document.body.classList.add('mobile');
    } else {
      // Add styles for desktop devices
      document.body.classList.add('desktop');
    }
  }

  // Initialize the application
  setupGlassEffect();
  setupResponsiveDesign();
  animateLoginForm();
});
