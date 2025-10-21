let emailInput = document.querySelector("#email-input");
let emailForm = document.querySelector(".email-form");
let errorMessage = document.querySelector(".error-message");
let successMessage = document.querySelector(".success-message");
let requestGranted = document.querySelector("#request-granted");

emailForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (emailInput.checkValidity() === false) {
        emailForm.classList.add("has-error");
        errorMessage.classList.remove("visually-hidden");
        successMessage.classList.add("visually-hidden");
    } else {
        emailForm.classList.remove("has-error");
        errorMessage.classList.add("visually-hidden");
        successMessage.classList.remove("visually-hidden");
        emailInput.value = "";
        requestGranted.innerText = "On the list";
    }
});

setTimeout(function () {
    requestGranted.style.display = 'none';
    requestGranted.innerText = 'Request access'; // reset text
}, 3000);


emailInput.addEventListener("mouseover", function () {
    emailInput.placeholder = "janedoe@gmail.com";
});

emailInput.addEventListener("mouseout", function () {
    emailInput.placeholder = "Email address";
});



