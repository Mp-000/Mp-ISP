function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    Swal.fire("Error", "Username & Password wajib diisi", "error");
    return;
  }

  if (pass.length < 4) {
    Swal.fire("Error", "Password minimal 4 karakter", "error");
    return;
  }

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("loginISP", "true");
    Swal.fire("Berhasil", "Login sukses", "success")
      .then(() => location.href = "index.html");
  } else {
    Swal.fire("Gagal", "Login tidak valid", "error");
  }
}

/* Proteksi halaman */
if (!localStorage.getItem("loginISP") && !location.pathname.includes("login")) {
  location.href = "login.html";
}
