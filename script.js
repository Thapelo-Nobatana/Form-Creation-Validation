
const form = document.getElementById('registration-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // validation tracker variable
    let isValid = false;

    // validation error message
    const messages = [];
    //username validation
    const username = document.getElementById('username').value.trim();
    const feedbackDiv = document.getElementById('form-feedback').value;
    if(username === isValid){
        feedbackDiv.textContent = 'Username is required';
        return;
    } else if(username.length < 3) {
        feedbackDiv.textContent = 'Username must be at least 3 characters long';
        return;
    } else {
        feedbackDiv.textContent = '';
    }

    //email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === isValid) {
        feedbackDiv.textContent = 'Email is required';
        return;
    } else if(!emailPattern.test(email)) {
        feedbackDiv.textContent = 'Please enter a valid email address';
        return;
    } else {
        feedbackDiv.textContent = '';
    }

    //password validation
    const password = document.getElementById('password').value;
    if(password === isValid) {
        feedbackDiv.textContent = 'Password is required';
        return;
    } else if(password.length < 6) {
        feedbackDiv.textContent = 'Password must be at least 6 characters long';
        return;
    } else {
        feedbackDiv.textContent = '';
    }
  // display feedback
  feedbackDiv.style.display = 'block';
  feedbackDiv.textContent = 'Registration successful!';
 feedbackDiv.style.color = "#28a745"; // green color for success
 // submit the form
    form.submit(); // this would be replaced with actual form submission logic
 form.reset(); // reset the form after successful submission
  setTimeout(() => {
      feedbackDiv.style.display = 'none'; // hide feedback after 3 seconds
  }, 3000);
});