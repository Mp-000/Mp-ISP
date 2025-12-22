function login(){
  const u = username.value.trim();
  const p = password.value.trim();

  if(!u || !p){
    return Swal.fire('Error','Wajib diisi','error');
  }

  const admin = { username:'admin', password:'12345' };

  if(u===admin.username && p===admin.password){
    localStorage.setItem('login',true);
    location.href='dashboard.html';
  }else{
    Swal.fire('Gagal','Login salah','error');
  }
}
