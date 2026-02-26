document.addEventListener("DOMContentLoaded", function () {

  const loginButton = document.getElementById("login-button");
  const togglePassword = document.getElementById("togglePassword");


  togglePassword.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "Show";
    }
  });


  loginButton.addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

  
    if (password === "password") {


      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("username", username);

      console.log("Login successful");


      window.location.href = "dashboard.html";

    } else {
      alert("Invalid password. Try 'password'");
      console.log("Login failed");
    }

  });

});
