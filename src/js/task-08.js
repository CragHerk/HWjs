const form = document.querySelector(".login-form");
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.value || !passwordInput.value) {
    alert("Please fill in all fields");
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);
  form.reset();
});
