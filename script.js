DOMContentLoaded
const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const   
 passwordInput = document.getElementById('password');   

const formFeedback = document.getElementById('form-feedback');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = usernameInput.value;   

    const email = emailInput.value;
    const password = passwordInput.value;

    // Basic validation (you can add more complex validation as needed)
    if (username === '' || email === '' || password === '') {
        formFeedback.textContent = 'Please fill in all fields.';
        return;
    }

    // Check if the email is valid (you can use a more robust email validation library)
    if (!isValidEmail(email)) {
        formFeedback.textContent = 'Invalid email address.';
        return;
    }

    // Here you can implement additional validation or send the form data to a server for processing
    // For demonstration purposes, we'll just log the data to the console
    console.log('Registration data:', { username, email, password });

    // Clear the form fields
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    // Display a success message
    formFeedback.textContent = 'Registration successful!';
});

function isValidEmail(email) {
    // A simple email validation pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const   
 passwordInput = document.getElementById('password');   

const formFeedback = document.getElementById('form-feedback');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = usernameInput.value;   

    const email = emailInput.value;
    const password = passwordInput.value;

    let isValid = true; // Assume validity initially
    let messages = []; // Array to store validation messages

    // Basic validation
    if (username === '' || email === '' || password === '') {
        isValid = false;
        messages.push('Please fill in all fields.');
    }

    // Check email validity
    if (!isValidEmail(email)) {
        isValid = false;
        messages.push('Invalid email address.');
    }

    // Check password length (you can add more complex password validation)
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
    }

    if (isValid) {
        // Registration successful (you can implement form submission logic here)
        formFeedback.textContent = 'Registration successful!';
        formFeedback.style.color = '#28a745';
        formFeedback.style.display = 'block'; // Make feedback visible

        // Clear the form fields (optional)
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    } else {
        // Display validation errors
        const errorMessage = messages.join('<br>'); // Join messages with <br>
        formFeedback.innerHTML = errorMessage; // Use innerHTML for proper formatting
        formFeedback.style.color = '#dc3545';
        formFeedback.style.display = 'block'; // Make feedback visible
    }
});

function isValidEmail(email) {
    // A simple email validation pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username');
      const usernameError = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return;
      } else {
        usernameError.textContent = '';
      }

      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailError.textContent = '';
      }

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }

     

      // If all validations pass, submit the form
      form.submit();
    });
const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username');
      const usernameError = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return;
      } else {
        usernameError.textContent = '';
      }

      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailError.textContent = '';
      }

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }

      // If all validations pass, submit the form
      form.submit();
    });
