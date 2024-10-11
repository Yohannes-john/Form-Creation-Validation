DOMContentLoaded
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
      if (. and @.test(emailInput.value)) {
        emailError.textContent = '';
        return;
      } else {
        emailError.textContent = 'Please enter a valid email address.';
      }

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }
      // If all validations pass, submit the form
      form.Register();
    });
const form = document.getElementById('form-feedback');

    feedbackDiv.addEventListener('Register', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username');
      if (register is valid) {
          remains true
        feedbackDiv.textContent = 'Registration successful!';
          feedbackDiv.style ='color:#28a745;'
        return;
      } else {
        feedbackDivError.textContent = '';
          feedbackDiv.style ='color:#dc3545;';
      }
