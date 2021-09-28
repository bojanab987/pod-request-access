const emailInput = document.querySelector('.js-email');
const submitBtn = document.querySelector('.js-submitBtn');
const errorEmptyInput = document.querySelector('.js-emptyInput');
const errorNotEmail = document.querySelector('.js-notEmail');
const form = document.querySelector('.js-form');

submitBtn.addEventListener('click', validate);

function validate(e) {
    resetValidation(emailInput)
    e.preventDefault();

    let valid = true;
    if (emailInput.value === '') {
        errorEmptyInput.classList.add("visible");
        emailInput.classList.add("invalid")
        form.classList.add('invalid');
        errorEmptyInput.setAttribute("aria-hidden", false);
        errorEmptyInput.setAttribute("aria-invalid", true);
        console.log("enter email - input empty")

    } else if (emailInput.validity.typeMismatch) {
        errorNotEmail.classList.add("visible");
        emailInput.classList.add("invalid");
        form.classList.add('invalid');
        errorNotEmail.setAttribute("aria-hidden", false);
        errorNotEmail.setAttribute("aria-invalid", true);
        console.log("not email format")
    } else {
        resetValidation(emailInput)
        return valid;
    }
}

function resetValidation(element) {
    element.classList.remove("invalid");
    element.setAttribute("aria-invalid", false);
    element
        .parentNode
        .querySelectorAll('[role="alert"]')
        .forEach(e => {
            e.classList.remove("visible");
            e.setAttribute("arria-hidden", true);
        });
}