console.log('session-login.js loaded');

document.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Username:', username);
  console.log('Password:', password);

  sessionStorage.setItem('username', username);
  sessionStorage.setItem('password', password);
  sessionStorage.setItem('loginTimestamp', new Date().toISOString());
  sessionStorage.setItem('loginAttempts', (parseInt(sessionStorage.getItem('loginAttempts') || '0') + 1).toString());
  
  console.log('Session data stored');

  location.reload();
});