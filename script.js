// ambil input
const user = document.getElementById("username");
const pass = document.getElementById("password");

function validasiLogin() {
  if (user.value === "admin" && pass.value === "123") {
    localStorage.setItem("isLogin", "true"); 
    window.location.href = "data.html"; 
    alert("Selamat, kamu berhasil login");
    return true; // form lanjut
  } else {
    alert("Username atau password salah");
    return false; // form berhenti
  }
}