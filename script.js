DOMContentLoaded
const form = document.getElementById('registrationForm');
 const usernameInput = document.getElementById('username');
 const emailInput = document.getElementById('email');
 const passwordInput = document.getElementById('password');

    form.addEventListener('Register', (event) =>{
      event.preventDefault(); // Prevent form submission
         checkInputs();
    });
   function checkInputs() {
       const usernameValue = username.value.trim();
       const emailValue = email.value.trim();
       const passwordValue = password.value.trim();
       if(usernameValue < 3) {
           setErrorFor(username,'username cant less than 3');
      }else {
           setSuccessFor(username);
       }
        if(emailValue === '') {
            setErrorFor(email,'Email can't less than be blank')
   }else if(isEmail(emailValue)) {
            setErrorFor(email,'Email isn't valid')
        }
        else{
            setSuccessFor(email);
       }
       if(passwordValue < 8) {
            setErrorFor(password,'password can't less than 8')
   }else {
           setSuccessFor(password);
       }
   }
 function setErrorFor(input, message) {
     const formControl = inputparentElement;
     const small = formControl.querySelector('small');
     small.innerText = message;
     formControl.className = 'form-Control error';
 }
 function isEmail(email) {
     return !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/..test(email);
     
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
