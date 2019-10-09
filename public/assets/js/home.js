const $setLogin = $('#login');
const $setSignUp = $('#signup');
const $submitButton = $('#submit');
const $emailInput = $('#email');
const $passwordInput = $('#password');

let authSetting = 'login';

function setAuth(setting) {
  authSetting = setting;

  if (authSetting === 'login') {
    $setLogin.addClass('active');
    $setSignUp.removeClass('active');
    $submitButton.text('Log In');
  } else {
    $setSignUp.addClass('active');
    $setLogin.removeClass('active');
    $submitButton.text('Sign Up');
  }
}

function handleFormSubmit() {
  let email = $emailInput.val().trim();
  let password = $passwordInput.val().trim();

  console.log(
    `Email: ${email} Password: ${password} AuthSetting: ${authSetting}`
  );
}

$setLogin.on('click', setAuth.bind(null, 'login'));
$setSignUp.on('click', setAuth.bind(null, 'signup'));
$submitButton.on('click', handleFormSubmit);
