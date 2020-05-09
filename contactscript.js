const submitButton = document.querySelector('.submit');
const contactForm = document.querySelector('#contact-form');
const invalidModal = document.querySelector('.invalid');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const topicInput = document.querySelector('#topic');
const textField = document.querySelector('textarea');

const validateName = () => {
    if (/^[a-zA-Z]+[\-']?[a-zA-Z]* [a-zA-Z]+[\-']?[a-zA-Z]*/g.test(nameInput.value)) {
        return true;
    } else {
        invalidModal.textContent += 'Please enter a valid name (first and last).'
        invalidModal.style.display = 'flex';
        return false;
    }
}

const validateEmail = () =>  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        return true;
    } else {
        invalidModal.textContent += 'Please enter a valid email address.'
        invalidModal.style.display = 'flex';
        return false;
    }
}

const validateTopic = () => {
    if (topicInput.value !== 'null') {
        return true;
    } else {
        invalidModal.textContent += 'Please select an option from the dropdown.'
        invalidModal.style.display = 'flex';
        return false;
    }
}

const validateText = () => {
    if (textField.value.length >= 10) {
        return true;
    } else {
        invalidModal.textContent += 'Please type a message in the text field (minimum 10 characters).'
        invalidModal.style.display = 'flex';
        return false;
    }
}

const validateHuman = () => {
    const response = grecaptcha.getResponse();
    console.log(response);
    if (JSON.parse(response).success) {
        return true;
    } else {
        invalidModal.textContent += 'Please prove you are not a robot.'
        invalidModal.style.display = 'flex';
        return false;
    }
}

const formValidation = () => {
    return (validateName() && validateEmail() && validateTopic() && validateText() && validateHuman())
}

submitButton.addEventListener('click', () => {
    invalidModal.textContent = '';
    invalidModal.style.display = 'none';
    if (formValidation()) {
        document.querySelector('#contact-form').submit();
    }
})