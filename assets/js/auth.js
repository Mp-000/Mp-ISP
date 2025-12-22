// Seed user default (sekali saja)
if(!localStorage.getItem('users')){
saveData('users',[
{id:1,username:'admin',password:'admin123',role:'Superadmin'},
{id:2,username:'operator',password:'operator123',role:'Operator'}
])
}


function login(){
const u = document.getElementById('username').value.trim();
const p = document.getElementById('password').value.trim();


if(u==='' || p===''){
alert('Username dan password wajib diisi');
return;
}


const users = getData('users');
const user = users.find(x => x.username === u && x.password === p);


if(user){
setSession({
id:user.id,
username:user.username,
role:user.role,
loginAt:new Date().toISOString()
});
location.href = 'dashboard.html';
} else {
alert('Username atau password salah');
}
}


// Proteksi halaman
function checkAuth(){
const session = getSession();
if(!session){
location.href = 'index.html';
}
}


function logout(){
clearSession();
location.href = 'index.html';
}
```javascript
if(!localStorage.getItem('users')){
saveData('users',[
{username:'admin',password:'admin',role:'Superadmin'},
{username:'operator',password:'123',role:'Operator'}
])
}
function login(){
const u = username.value;
const p = password.value;
const users = getData('users');
const cek = users.find(x=>x.username===u && x.password===p);
if(cek){
localStorage.setItem('login',JSON.stringify(cek));
location.href='dashboard.html';
} else alert('Login gagal');
}
