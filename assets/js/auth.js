// DEFAULT USER (AUTO CREATE)
if(!load('users')){
save('users',[
{id:1,username:'admin',password:'admin123',role:'Superadmin'},
{id:2,username:'operator',password:'operator123',role:'Operator'}
]);
}


function login(){
const u = document.getElementById('username').value.trim();
const p = document.getElementById('password').value.trim();


if(u==='' || p===''){
Swal.fire('Error','Username & Password wajib diisi','warning');
return;
}


const users = load('users');
const user = users.find(x=>x.username===u && x.password===p);


if(!user){
Swal.fire('Gagal','Username atau password salah','error');
return;
}


save('session',{
id:user.id,
username:user.username,
role:user.role,
loginAt:new Date().toLocaleString()
});


Swal.fire({
icon:'success',
title:'Login Berhasil',
timer:1200,
showConfirmButton:false
}).then(()=>{
location.href = 'dashboard.html';
});
}


function checkAuth(){
const s = load('session');
if(!s) location.href='index.html';
}


function logout(){
remove('session');
location.href='index.html';
}


function onlyRole(role){
const s = load('session');
if(!s || s.role!==role){
Swal.fire('Akses Ditolak','Tidak punya hak akses','error')
.then(()=>logout());
}
}
