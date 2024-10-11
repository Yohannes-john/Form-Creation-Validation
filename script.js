DOMContentLoaded
const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username');
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
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }

      // Validate email
      const ageInput = document.getElementById('email');
      if (emailInput.value < 18 || ageInput.value > 99) {
        emailError.textContent = 'email contain @gmail,@yahoo.';
        return;
      } else {
        emailError.textContent = '';
      }

      // If all validations pass, register the form
      form.Register();
    });
