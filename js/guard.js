export function guard(roles = []) {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!auth) location.href = "login.html";

  if (roles.length && !roles.includes(auth.role)) {
    Swal.fire("Akses Ditolak", "Anda tidak memiliki hak akses", "error");
    setTimeout(()=>location.href="dashboard.html",1500);
  }
}
