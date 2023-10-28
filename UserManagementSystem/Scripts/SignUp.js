document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validation
    const empId = document.getElementById('empId').value;
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;

    var mobileRegex = /^0\d{10}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!mobileRegex.test(mobile)) {
        alert('Please enter a valid mobile number');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    alert('Form submitted successfully');
});

