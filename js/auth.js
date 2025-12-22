function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("loginISP", true);
    Swal.fire("Berhasil", "Login sukses", "success")
      .then(() => location.href = "dashboard.html");
  } else {
    Swal.fire("Gagal", "Username / Password salah", "error");
  }
}

if (localStorage.getItem("loginISP")) {
  if (location.pathname.includes("login")) {
    location.href = "index.html";
  }
}
