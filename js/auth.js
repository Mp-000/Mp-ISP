export function login(username, password) {
  const users = [
    {user:"superadmin", pass:"1234", role:"SUPER"},
    {user:"admin", pass:"1234", role:"ADMIN"},
    {user:"finance", pass:"1234", role:"KEUANGAN"}
  ];

  const found = users.find(u => u.user === username && u.pass === password);
  if (!found) return false;

  localStorage.setItem("auth", JSON.stringify(found));
  return true;
}
