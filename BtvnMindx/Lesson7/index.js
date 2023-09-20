// giải phương trình bậc 2

var a, b, c

a = parseFloat(prompt('Nhap a = '))
b = parseFloat(prompt('Nhap b = '))
c = parseFloat(prompt('Nhap c = '))

if(a == 0) {
	if(b == 0) {
		if(c == 0) {
				alert('Phuong trinh VSN')
			} else {
				alert('Phuong trinh VN')
			}
		} else {
			x = -c/b
			alert('Nghiem phuong trinh x = ' + x)
		}
	} else {
		dt = b*b - 4*a*c;
		if(dt < 0) {
			alert('Phuong trinh vo nghiem')
		} else if(dt == 0) {
			x = -b/(2*a)
			alert('Nghiem phuong trinh x1 = x2 = ' + x)
		} else {
			x1 = (-b + Math.sqrt(dt))/(2*a)
			x2 = (-b - Math.sqrt(dt))/(2*a)
			alert(`Nghiem x1 = ${x1}, x2 = ${x2}`)
		}
	}

//kiểm tra số chẳn, lẻ
var number
number = parseFloat(prompt('Nhập số cần kiểm tra = '))

if(number%2==0){
    alert('Số vừa nhập là số chẳn')
}else{
    alert('số vừa nhập là số lẻ')
}
 

//Hình chữ nhật
var dai,rong;

dai = parseFloat(prompt('Nhap chieu dai hình chữ nhật = '))
rong = parseFloat(prompt('Nhập chiều rộng hình chữ nhật = '))

chuvi = (dai + rong) * 2;
dientich = dai * rong ;
alert(`Chu vi hình chữ nhật = ${chuvi}, diện tích = ${dientich}`)


//hình Vuông
var canh  ;

canh = parseFloat(prompt('Nhập chiều dài cạnh hình vuông = '))

chuvivuong = canh * 4; 
dtvuong= canh * canh;
alert(`Chu vi hình vuông = ${chuvivuong}, diện tích = ${dtvuong}`)


//Hình tam giác vuông
var canhgocvuong1, canhgocvuong2,huyen

canhgocvuong1 = parseFloat(prompt('Nhap vào cạnh góc vuông a = '))
canhgocvuong2 = parseFloat(prompt('Nhap vào cạnh góc vuông b = '))
huyen = parseFloat(prompt('Nhap vào cạnh huyền = '))

chuvitamgiac= canhgocvuong1 +canhgocvuong2+huyen;
dttamgiac= (canhgocvuong1 * canhgocvuong2)/2;
alert(`Chu vi hình tam giác vuông = ${chuvitamgiac}, diện tích = ${dttamgiac}`)

