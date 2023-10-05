var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        nameError.style.color = "red";

        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        nameError.style.color = "red";
        return false;
    }
    nameError.innerHTML = "Valid";
    nameError.style.color = "seagreen";
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "phone number is required";
        phoneError.style.color = "red";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone number should be 10 digits";
        phoneError.style.color = "red";
        return false;
    }
    if (!phone.match(/^[0-9]{10}/)) {
        phoneError.innerHTML = "phone number is required";
        phoneError.style.color = "red";

        return false;
    }
    phoneError.innerHTML = "Valid";
    phoneError.style.color = "seagreen";
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";

        return false;
    }
    if (!email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        emailError.innerHTML = "Invalid Email";
        emailError.style.color = "red";

        return false;
    }

    emailError.innerHTML = "Valid";
    emailError.style.color = "seagreen";
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + "more characters required ";
        messageError.style.color = "red";
        return false;
    }
    messageError.innerHTML = "Valid";
    messageError.style.color = "seagreen";
    return true;
}

function validateForm() {
    if (!validateName() ||
        !validatePhone() ||
        !validateEmail() ||
        !validateMessage()
    ) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}