document.addEventListener('DOMContentLoaded', function () {
  const loginContainer = document.querySelector('.login-container');
  const loginForm = document.getElementById('loginForm');
  const bdyTxt = document.getElementById('bdy-txt');
  const username = sessionStorage.getItem('username');

  if (username) {
    if (loginForm) {
      loginForm.style.display = 'none';
    }
    if (loginContainer) {
      loginContainer.style.display = 'none';
    }
    bdyTxt.style.display = 'block';
    const h1 = document.querySelector('h1');
    if (h1) {
      h1.style.display = 'none';
    }
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'text-center mb-4';
    welcomeDiv.innerHTML = `<h2>Welcome, ${username}!</h2><button id="logoutBtn" class="btn btn-secondary mt-3">Logout</button>`;
    document.querySelector('h1').after(welcomeDiv);
    document.getElementById('logoutBtn').addEventListener('click', function () {
      sessionStorage.clear();
      location.reload();
    });
  }
});