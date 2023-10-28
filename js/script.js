function validation() {
    const username = document.getElementById('Username').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.textContent = "";
    successMessage.textContent = "";

    const errorMessages = validateForm(username, email, password);

    if (errorMessages.length === 0) {
        const url = "register_form.php";
        const formData = new URLSearchParams();
        formData.append("Username", username);
        formData.append("Email", email);
        formData.append("Password", password);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                if (data.trim() === "success") {
                    successMessage.textContent = "Registration successful!";
                    setTimeout(function () {
                        successMessage.textContent = "";
                        document.getElementById('myForm').reset();
                    }, 3000);
                } else {
                    errorMessage.textContent = "Error in registration. Please try again.";
                }
            })
            .catch(error => {
                errorMessage.textContent = "Error: " + error.message;
            });
    } else {
        errorMessage.innerHTML = `<div>${errorMessages[0]}</div>`;
    }
}

function validateForm(username, email, password) {
    const fields = [
        { value: username, message: "Please enter a username.", condition: (value) => value === null || value === "" },
        { value: username, message: "Your username must be at least 6 characters long.", condition: (value) => value.length < 6 },
        { value: email, message: "Please enter your email address.", condition: (value) => value === "" },
        { value: email, message: "Please enter a valid email address.", condition: (value) => !isValidEmail(value) },
        { value: password, message: "Please enter a password.", condition: (value) => value === "" },
        { value: password, message: "Password must be at least 6 characters.", condition: (value) => value.length < 6 }
    ];

    const errorMessages = [];

    for (const field of fields) {
        if (field.condition(field.value)) {
            errorMessages.push(field.message);
            break;
        }
    }

    return errorMessages;
}

function isValidEmail(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
}
