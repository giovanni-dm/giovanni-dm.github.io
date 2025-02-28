document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in");

    function checkScroll() {
        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load
});


function validateForm() {
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    let valid = true;

    // Name validation
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Message validation
    const messageError = document.getElementById('messageError');
    if (message.trim() === '') {
        messageError.textContent = 'Message cannot be empty.';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    return valid;
}


