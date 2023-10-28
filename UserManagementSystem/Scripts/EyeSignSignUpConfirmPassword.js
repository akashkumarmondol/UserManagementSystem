document.getElementById('togglePassword2').addEventListener('click', function () {
    var passwordField = document.getElementById('confirmPassword');
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
