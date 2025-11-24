// Function to load the navbar component
function loadNavbar() {
  fetch("/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      attachLoginButtonHandler();
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
}

// Function to load the login modal component
function loadLoginModal() {
  fetch("./components/login-modal.html")
    .then((response) => response.text())
    .then((data) => {
      const modalDiv = document.createElement("div");
      modalDiv.innerHTML = data;
      document.body.appendChild(modalDiv.firstElementChild);
      attachModalHandlers();
    })
    .catch((error) => console.error("Error loading login modal:", error));
}

// Attach click handler to Log in button
function attachLoginButtonHandler() {
  const loginBtn = document.querySelector(".login-button");
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const modal = document.getElementById("login-modal");
      if (modal) {
        modal.style.display = "flex";
      }
    });
  }
}

// Attach close handler to modal
function attachModalHandlers() {
  const closeBtn = document.getElementById("login-modal-close");
  const modal = document.getElementById("login-modal");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
    // Optional: close modal when clicking outside content
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

// Load navbar and modal when the page loads
document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
  loadLoginModal();
});
