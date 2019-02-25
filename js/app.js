let registerSwitcher = document.querySelector('#showUserRegister'),
    loginSwitcher = document.querySelector('#showUserLogin'),
    userLogin = document.querySelector('#userLogin'),
    userRegister = document.querySelector('#userRegister');

registerSwitcher.addEventListener('click', e => {
  e.preventDefault();
  userLogin.style.display = 'none';
  userRegister.style.display = 'block';
});

loginSwitcher.addEventListener('click', e => {
  e.preventDefault();
  userLogin.style.display = 'block';
  userRegister.style.display = 'none';
});


