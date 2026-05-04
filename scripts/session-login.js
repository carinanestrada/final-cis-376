document.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Login attempt:', username);

  if (password !== 'key123') {
    console.log('Login failed: incorrect password');
    alert('Incorrect password');
    return;
  }

  console.log('Login successful');

  sessionStorage.setItem('username', username);
  sessionStorage.setItem('password', password);
  sessionStorage.setItem('loginTimestamp', new Date().toISOString());
  sessionStorage.setItem('loginAttempts', (parseInt(sessionStorage.getItem('loginAttempts') || '0') + 1).toString());

  window.location.assign('about.html');
});