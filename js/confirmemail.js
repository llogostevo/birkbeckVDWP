var elem = document.getElementById("email_addr_confirm");
elem.addEventListener("blur", verifyEmail);

function verifyEmail(input) {
  input = input.srcElement;
  if (input.value != document.getElementById('email').value) {
    // the provided value doesn’t match the primary email address
    input.setCustomValidity('The two email addresses must match.');
  } else {
    // input is valid -- reset the error message
    input.setCustomValidity('');
  }
}