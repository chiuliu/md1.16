// /Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi "Xin chao". Gọi hàm từ trong phần <body> của trang web.

// function alertMessage() {
//     alert('Xin chào');
// }

// alertMessage();

//Tạo hàm nhận vào một đối số dạng số,
//tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm.
//Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.


// let n = +prompt('Mời bạn nhập số:');

// function tangGiatri(n) {
//     return n + 1;
// }

// console.log(tangGiatri(n));

// Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất
//lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
//Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

// let a = +prompt('Mời bạn nhập số a:');
// let b = +prompt('Mời bạn nhập số b:');

// function tinhTong(a, b) {
//     if (a > b) {
//         alert('Số a lớn hơn số b');
//     } else {
//         return a + b;
//     }
// }

// console.log(tinhTong(a, b));

//Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn có
//thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.
//Đoạn mã có dạng như sau:


// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     console.log(firstNum);
//     console.log(secondNum);
//     console.log(result);
//     return result;

// }
// result = 0;
// result = addNumbers();

// console.log(result);

//Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau:
//Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus.
//Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương
// ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo.

//Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó.

//Trong phần của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.
// const arr1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
// const arr2 = [' Ursa Minor', 'Tarurus', 'Cygnus', ' Lyra', 'Aquila', 'Ursa Major', 'Leo'];

// const text = prompt('Mời nhập tên');
// console.log(nhanVat());
// function nhanVat() {
//     for (let i = 0; i < text.length; i++) {
//         if (arr1[i] === text) {
//             console.log(arr2[i]);
//             return;
//         }
//         else if (i === arr1.length - 1) {
//             console.log('Không tìm thấy');
//         }
//         else {
//             continue;
//         }
//     }
// }
