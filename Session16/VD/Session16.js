//Viết 1 hàm có tham số truyền vào là 1 số được nhập từ bàn phím
//Trong hàm sử lý : kiểm tra số truyền vào (2 ->8)
//In ra thứ trong tuần
//VD: input 2,3,4,5,6,7,8
//output: Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7, thứ 8

// let date;

// do {
//     date = +prompt('Mời bạn nhập các thứ trong tuần')
// }
// while (date < 2 || date > 8);


// var logDate = (date) => {
//     switch (date) {
//         case 8:
//             console.log("Thứ chủ nhật");
//             break;
//         default:
//             console.log(`Thứ ${date}`);
//             break;
//     }
// }

// logDate(date);


//Viết funtion chuyền độ C -> độ K -> K = C + 273

// function degree(C) {
//     let K = C + 273;
//     console.log(K);
//     return K;
// }

// let doK = degree(30);

// if (doK < 400) {
//     console.log("BT");
// }
// else {
//     console.log('Bị sốt');
// }

//Tự khai báo hai biến a, b ngẫu nhiên tùy thích ;
//Viết funtion tăng a, b lên 10 đơn vị ; có return ra a, b;
//clg a, b trước khi gọi hàm, trong hàm , sau khi gọi hàm.

// let a = 10;
// let b = 20;

// console.log(a, b);

// function increase(a, b) {
//     a = a + 10;
//     b = b + 10;
//     console.log(a, b);
//     return a, b;
// }

// increase(a, b);
// console.log(a, b);

//Khai báo 1 mảng
//Viết function sắp xếp theo chiều giảm dần có dùng sort
//log mảng trước, trong, sau khi gọi hàm.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr);

// function sort(arr) {
//     return arr.sort((a, b) => b - a);
// }

// console.log(sort(arr));

//dùng hàm reduce để tính tổng của mảng

// const arr = [23, 34, 12, 11, 5, 9, 55, 61];

// const sum = arr.reduce((a, b) => a + b, 0);

// console.log(sum);
