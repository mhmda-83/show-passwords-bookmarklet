let shownPasswords = document.querySelectorAll('input[data-is-password-field]');
if (shownPasswords.length != 0) {
  for (let i = 0; i < shownPasswords.length; i++) {
    shownPasswords[i].type = 'password';
    delete shownPasswords[i].dataset.isPasswordField;
  }
} else {
  let passwordElements = document.querySelectorAll('input[type="password"]');
  for (let i = 0; i < passwordElements.length; i++) {
    passwordElements[i].type = 'text';
    passwordElements[i].dataset.isPasswordField = true;
  }
}
