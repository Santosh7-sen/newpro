const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementsByClassName('close')[0];
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginFormContainer = document.getElementById('login-form-container');
const registerFormContainer = document.getElementById('register-form-container');

openModalBtn.onclick = () => {
    modal.style.display = 'block';
};

closeBtn.onclick = () => 
     modal.style
