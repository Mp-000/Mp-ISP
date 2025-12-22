// BUAT USER DEFAULT (PASTI JALAN)
if(!localStorage.getItem('users')){
save('users',[
{username:'admin',password:'admin123',role:'Superadmin'},
{username:'operator',password:'operator123',role:'Operator'}
]);
}


function login(){
const u = document.getElementById('username').value;
const p = document.getElementById('password').value;


const users = load('users');
const user = users.find(x => x.username === u && x.password === p);


if(user){
save('session', user);
window.location = 'dashboard.html';
} else {
alert('LOGIN GAGAL');
}
}


function checkAuth(){
if(!load('session')){
window.location = 'index.html';
}
}


function logout(){
localStorage.removeItem('session');
window.location = 'index.html';
}
