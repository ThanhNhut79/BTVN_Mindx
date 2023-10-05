const form = document.getElementById("form");
const dataUser = ['abc@gmail.com', 'abc12@gmail.com', 'abc123@gmail.com']

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirmPassword");

function checkValidatePassword(password) {
  if (password.length < 6) {
    return false;
  }

  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      hasUppercase = true;
      break;
    }
  }

  return hasUppercase;
}

function send() {
  const valueEmail = emailElement.value
  const valuePassWord = passwordElement.value
  const valueComfirmPassWord = confirmPasswordElement.value
  const isSamePass = valuePassWord === valueComfirmPassWord
  const isCheckEmail = dataUser.includes(valueEmail);
  const isValidatePass = checkValidatePassword(valuePassWord)

  console.log({ valueEmail, valuePassWord, valueComfirmPassWord })
  
  if(isCheckEmail){
    alert("Email đã được sữ dụng")
  }

  if (!isValidatePass) {
    alert("Password phải có ít nhất 1 kí tự viết hoa và có ít nhất 6 kí tự ")
  }

  if (!isSamePass) {
    alert("Password phải giống với confirm password")
  }

  const userInfor = {
    email: valueEmail,
    password: valuePassWord,
  };


  if(!isCheckEmail && isValidatePass && isSamePass){
    localStorage.setItem("users", JSON.stringify(userInfor));
    alert("Đăng ký tài khoản thành công!");
  }
}


function login() {
  var username = document.getElementById('usernameLogin').value;
  var password = document.getElementById('passwordLogin').value;

  var users = JSON.parse(localStorage.getItem('users'));
  console.log(users)
  console.log({username,password})
  if (users && users.email === username && users.password === password) {
    alert('Đăng nhập thành công!');
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không đúng!');
  }
}