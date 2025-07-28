const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const formTitle = document.getElementById('form-title');

    loginBtn.addEventListener('click', () => {
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
      loginBtn.classList.add('active');
      registerBtn.classList.remove('active');
      formTitle.textContent = "Login";
    });

    registerBtn.addEventListener('click', () => {
      loginForm.classList.remove('active');
      registerForm.classList.add('active');
      loginBtn.classList.remove('active');
      registerBtn.classList.add('active');
      formTitle.textContent = "Register";
    });

    // Handle both forms
    loginForm.addEventListener("submit", (e) => {
      alert("Thank you for logging into our system.");
      loginForm.reset();
    });

    registerForm.addEventListener("submit", (e) => {
      alert("Thank you for registering!");
      registerForm.reset();
    });