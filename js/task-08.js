const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) { 
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    if (mail === "" || password === "") {
        return alert('Поле не может быть пустым !!!');
        
    }

    const formData = {
        mail,
        password,
    }

    event.currentTarget.reset();
    
    console.log(formData);

};