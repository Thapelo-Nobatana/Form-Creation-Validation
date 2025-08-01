document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('fom-feedback');

    form.addEventListener('submit', (even) => {
        even.preventDefault();

        // input validation
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initial values
        let isValid = true;
        const messages = [];

        // Validate username
        if(!username){
            isValid = false;
            messages.push('Username is required.');
        } else if(username.length < 3){
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if(!email){
            isValid = false;
            messages.push('Email is required.');
        } else if(!/\S+@\S+\.\S+/.test(email)){
            isValid = false;
            messages.push('Email format is invalid.');
        }

        // Validate password
        if(!password){
            isValid = false;
            messages.push('Password is required.');
        } else if(password.length < 6){
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if(!isValid){
            feedbackDiv.innerHTML = `<ul>${messages.map(msg => `<li>${msg}</li>`).join('<br>')}</ul>`;
            feedbackDiv.style.color = '#dc3545'; // red color for errors
        } else {
            feedbackDiv.textContent = `Registration successful! Welcome, ${username}.`;
            feedbackDiv.style.color = '#28a745'; // green color for success
            form.submit()
        }
    })
});