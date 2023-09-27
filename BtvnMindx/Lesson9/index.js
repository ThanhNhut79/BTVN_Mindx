//bai 1
const arr = [0, 5, 9, 4, 6, 10, 18];
const arrChan = [];
const arrLe = [];

arr.filter((num) => {
  if (num % 2 === 0) {
    arrChan.push(num);
  } else {
    arrLe.push(num);
  }
});
console.log("số chẳn", arrChan);
console.log("số Lẻ", arrLe);

//bài 2
const arr2 = [1, 3, 4, 5];
const a = [];
const b = [];
arr2.filter((num) => {
  if (num % 2 === 0) {
    a.push(num);
  } else {
    b.push(num);
  }
});
if (a.length === 1) {
  console.log(a);
} else {
  console.log(b);
}
