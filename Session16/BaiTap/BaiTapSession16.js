//Viết chương trình tạo hàm tính tổng 2 số

// function tinhTong(a, b) {
//     return a + b;
// }

// console.log(tinhTong(10, 20));

//Viết chương trình tạo hàm tính diện tích và chu vi hình tròn

// function tinhDienTich(r) {
//     return Math.PI * r * r;
// }

// function tinhChuVi(r) {
//     return 2 * Math.PI * r;
// }

// console.log(tinhDienTich(10));

// console.log(tinhChuVi(10));

//Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay không?

// function kiemTraKyTuSo(str) {
//     return !isNaN(str);
// }

// console.log(kiemTraKyTuSo('1'));


//Viết chương trình cho người dùng nhập vào một số, kiểm tra xem số đưa vào có
//phải nguyên dương không? Nếu đung trả vè true, sai trả về false

// function kiemTraSoDuong(n) {
//     return n > 0;
// }

// console.log(kiemTraSoDuong(10));

//Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó

// function doiCho(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
//     return [a, b];
// }

// console.log(doiCho(10, 20));

//Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó

// function timSoNhoNhat(a, b, c) {
//     let min = a;
//     if (b < min) {
//         min = b;
//     }
//     if (c < min) {
//         min = c;
//     }
//     return min;
// }

// console.log(timSoNhoNhat(10, 20, 30));

//Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không?

// function kiemTraSoNguyenTo(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(kiemTraSoNguyenTo(10));

//Viết hàm trả về tất cả các cặp số có tổng bằng 10

// let Int = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum10 = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == 10) {
//                 console.log(arr[i] + " và " + arr[j]);
//             }
//         }
//     }
// }

// sum10(Int);

//Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

//B1: Duyệt qua mảng ký tự letters (làm việc được với từng ký tự 1)

//B2: Tại mỗi lần duyệt qua ký tự 
//Kiểm tra xem đã có thuộc tính với ký tự đang duyệt qua 
//nằm trong đối tượng frequently hay chưa

//--nếu chưa
//--Thêm một thuộc tính trùng với ký tự đang duyệt qua và số tần xuất của chúng với giá trị là 1
//--nếu rồi 
//--gọi thuộc tính trùng với kyd tự đang duyệt qua ra (frequently) và tăng giá trị của phép tính lên 1

// let letters = word.split("");
// let frequency = [];
// for (let i in letters) {
//     if (frequency[letters[i]]) {
//         frequency[letters[i]]++;
//     }
//     else {
//         frequency[letters[i]] = 1;
//     }
// }
// console.log(frequency);

// for (let key in frequency) {
//     console.log(` ký tự ${key} xuất hiện ${frequency[key]} lần`);
// }




// let str = prompt('Mời bạn nhập vào chuỗi kí tự');

// function tinhTanSuatXuatHien(str) {
//     let result = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (result[char]) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         }
//     }
//     return result;
// }

// console.log(tinhTanSuatXuatHien(str));


// function frequencyCounter(word) {
//     //tách chuỗi ra từng kí tự'
//     let letters = word.split("");
//     let frequency = [];
//     console.log(letters);
//     //lấy ra từng ký tự trong chuỗi
//     for (let i in letters) {
//         let letter = letters[i];
//         //tìm kiếm
//         let findIndex = frequency.findIndex(function (el) {
//             return el.startsWith(letter);
//             //kiểm tra xem 1 chuỗi có bằng kí tự bắt đầu hay ko
//         });

//         if (findIndex < 0) {
//             frequency.push(`${letter}-1`);
//         }
//         else {
//             let count = frequency[findIndex].split('-')[1];
//             frequency[findIndex] = `${letter}-${+count + 1}`;
//         }
//     }
//     for (let freq of frequency) {
//         console.log(`Ký tự ${freq[0]} xuất hiện ${freq[2]} lần`);
//     }

// }

// frequencyCounter('Hello world');


//Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Thực thi hàm vừa khởi tạo

// function tinhGiaiThua(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(tinhGiaiThua(6));

//Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn

// let str = prompt('Mời bạn nhập vào chuỗi kí tự');

// function sapXepChuoiSo(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (!isNaN(char)) {
//             result.push(char);
//         }
//     }
//     result.sort();
//     return result.join('');
// }

// console.log(sapXepChuoiSo(str));

//Viết chương trình tạo hàm để kiểm tra xem năm người dùng nhập vào có phải năm nhuận không

// function kiemTraNamNhuan(n) {
//     return n % 400 == 0 || (n % 4 == 0 && n % 100 != 0);

// }

// console.log(kiemTraNamNhuan(2000));