const container = document.querySelector('.containor');
const Signupbtn = document.querySelector('.signup');
const loginbtn = document.querySelector('.login');

Signupbtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
})

function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();

    if (phoneValue === '') {
        alert('Please enter your phone number.');
        return;
    }

    if (phoneValue.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (!/^\d+$/.test(phoneValue)) {
        alert('Please enter a valid integer for the phone number.');
        return;
    }

    // Redirect to OTP login page
    location.href = 'OTPlogin.html';
}