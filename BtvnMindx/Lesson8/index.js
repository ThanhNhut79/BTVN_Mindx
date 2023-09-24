//kiểm tra số nguyên tố
var n;
n = parseFloat(prompt("Nhập số cần kiểm tra = "));

if (n < 2) {
  alert("Số vừa nhập không phải là số nguyên tố");
} else {
  for (var i = 2; i < n - 1; i++)
    if (n % i == 0) {
      alert("Số vừa nhập không phải là số nguyên tố");
      break;
    } else {
      alert("Số vừa nhập  là số nguyên tố");
      break;
    }
}

//tính giai thừa
var num;
num = parseFloat(prompt("Nhập số cần tính = "));
if (num == 0) {
  alert("Ket qua = 1");
} else {
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  alert(`Ket qua = ${num}`);
}

//tinh tong so le
var number;
var dem = 0;
number = parseFloat(prompt("Nhập số  = "));
for (i = 1; i <= number; i++) {
  if (i % 2 != 0) {
    dem++;
  }
}
alert(`tổng số lẻ là  ${dem}`);
