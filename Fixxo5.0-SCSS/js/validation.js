const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentsInput = document.querySelector('#comments');

const validateName = (value) => {
    const nameError = document.querySelector('.contact-form-name .error');
    if (value.length < 2){
        nameError.style.display = 'block';
        return true
    }  
    else
        nameError.style.display = 'none';
        return false
}

const validateEmail = (value) => {
    const emailError = document.querySelector('.contact-form-email .error');
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(value)){
        emailError.style.display = 'block';
        return true
    }
    else
        emailError.style.display = 'none';
        return false
}

const validateComment = (value) => {
    const commentsError = document.querySelector('.contact-form-comments .error');
    if (value.length < 5){
        commentsError.style.display = 'block';
        return true
    }  
    else
        commentsError.style.display = 'none';
        return false
}

nameInput.addEventListener('keyup', (e) => validateName(e.target.value.trim()));
emailInput.addEventListener('keyup', (e) => validateEmail(e.target.value.trim()));
commentsInput.addEventListener('keyup', (e) => validateComment(e.target.value.trim()));
form.addEventListener('submit', handleSubmit);


async function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
  
    if (!form.checkValidity()) {
      alert('Fill the form with valid information');
      return;
    }
  
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const comments = form.elements.comments.value;
  
    const contactForm = { name, email, comments };
  
    fetch('https://kyh-net22.azurewebsites.net/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactForm)
    })
    .then(res => {
      if (res.status === 200) {
        window.location.href = './formSubmitted.html';
      } else {
        alert('Oops something went wrong');
      }
    });
}