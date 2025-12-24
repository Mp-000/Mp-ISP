const USERS = [
  { username: 'admin', password: '123', role: 'Admin' },
  { username: 'noc', password: '123', role: 'NOC' },
  { username: 'finance', password: '123', role: 'Finance' },
  { username: 'cs', password: '123', role: 'Customer Service' }
];

function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;

  const user = USERS.find(x => x.username === u && x.password === p);

  if (!user) {
    Swal.fire('Login Gagal', 'Username atau password salah', 'error');
    return;
  }

  localStorage.setItem('user', JSON.stringify(user));
  location.href = 'dashboard.html';
}
  
