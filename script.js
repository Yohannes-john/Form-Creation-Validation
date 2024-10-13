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
