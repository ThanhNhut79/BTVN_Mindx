function clickButton() {
  const inputName = document.getElementById("name").value;
  const inputPass = document.getElementById("pass").value;
  if (inputName === "admin" && inputPass === "admin123") {
    alert("Dang nhap thanh cong");
  } else {
    alert("Dang nhap that bai");
  }
}
