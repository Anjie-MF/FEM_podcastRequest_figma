let emailInput = document.querySelector("#email-input");
let emailForm = document.querySelector(".email-form");
let errorMessage = document.querySelector(".error-message");

emailForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (emailInput.checkValidity() === false) {
        emailInput.placeholder = "jane#email.com";
        emailForm.classList.add("has-error");
        errorMessage.classList.remove("visually-hidden");
    } else {
        emailInput.placeholder = "Email address";
        emailForm.classList.remove("has-error");
        errorMessage.classList.add("visually-hidden");
    }
});

emailInput.addEventListener("mouseover", function () {
    emailInput.placeholder = "janedoe@gmail.com";
});

emailInput.addEventListener("mouseout", function () {
    emailInput.placeholder = "Email address";
});



