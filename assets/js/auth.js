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
