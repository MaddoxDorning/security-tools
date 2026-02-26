document.addEventListener("DOMContentLoaded", function () {

  const logoutButton = document.getElementById("btnLogout");

  const isLoggedIn = sessionStorage.getItem("loggedIn");

  const currentPath = window.location.pathname;

  const onDashboard = currentPath.includes("dashboard.html");
  const onDataPage = currentPath.includes("data.html");

  // Restrict protected pages
  if ((onDashboard || onDataPage) && !isLoggedIn) {
    window.location.href = "/index.html";
  }

  // Logout logic
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      sessionStorage.clear();
      window.location.href = "/index.html";
    });
  }

});