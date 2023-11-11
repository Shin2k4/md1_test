// let number = Number(prompt("nhập vào 1 số!"))
// if (number %2 ==0) {
//     alert("bạn vừa nhập số chẵn")
// }else {
//     alert("bạn vừa nhập số lẻ")
// }

// if (number > 100) {
//     alert("bạn vừa nhập số lớn hơn 100")
// }else if(number >10 ){
//     alert("bạn vừa nhập số lớn hơn 10")
// }else{
//     alert ("bạn vừa nhập 1 số nhỏ hơn 10")
// }

// switch (prompt("mời b nhập số bất kì")) {
//  // Kiểm tra result === value
//  case 25:
//  console.log("Thực thi khối lệnh 1");
//  break;
//  case 100:
//  console.log("Thực thi khối lệnh 2");
//  break;
//  case 5:
//  console.log("Thực thi khối lệnh n");
//  break;
//  case 55:
//  default:
//  console.log("Thực thi khối lệnh khi tất cả các case không được thực hiện");
// }


// let number = [1,2,3,4,5];
// for(var i=1 ;i<1000 ;i++){
//     console.log('anh xin lỗi',i);
// }
// console.log(i);


// <> Dùng for viết hàm tính tổng các số từ 1 ->10 ;
// in kết quả bằng alert

// let result = 0;
// for (let i = 1; i < 11; i++) {
//     result += i; // result = result + 1
// }
// alert("kết quả là" + result)



// let result = 0;
// let x = 0;
// let y = 0;
// for (let i = 0; i <= 10; i++) {
//     result +=i
//     if(i %2 ==0){
//          x += i ;

//     }else{

//         y +=i;
//     }
// }
//     console.log(x , y)

// let i = 1;
// let sum = 0;
// while (i <= 25) {
//     console.log("i", i);
//     sum = sum + i;
//     i++;
// }
// console.log(sum);


// let number = Number(prompt("Nhập số của bạn thích"));
// let sum = 0;
// let i = Math.ceil(number/2);
// while (i <= number) {

//     sum += i
//     i++;
// }
// console.log(sum);


// let number = Number(prompt("Nhập số bạn thích"));
// let sum = 0;
// for (let i = Math.ceil(number/2); i <=  number; i++) {
//     sum += i
// }
//     console.log(sum);


// function dyu() {
//     alert("xin chào!")
// }

// function sum(a,b,c) {
//     console.log(a,b,c);
// }

// let number = [1 ,2,3,4,5,6]
// number.push(6);
// console.log(number);
// number.unshift(7);
// console.log(number);
// let test = number.pop();
// console.log(test);
// console.log(number);
// console.log(number.shift());



// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }


// function sumItemInArray(array) {
//     let result =0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//     return result;
// }
// console.log(sumItemInArray(number));


//viết 1 funtion 
//nhận 1 đối số là mảng 
//ktra xem tất cả phần tử trong mảng có phải number hay không
//có == true; ko ==fale

// let numbers = [1,2,"a","b","c",3,4,5];
// function checkNumbers(array) {

//     for (let i = 0; i < array.length; i++) {

//         if (typeof array[i]!="Number") {
//             return false
//         }

//     }
//     return true

// }
// console.log(checkNumbers(numbers));



// viết function nhập vào 1 mảng và trả về phần tử cuối cùng của mảng 
//ko đc sử dụng pop

// let number = [1,2,4,5,6,7]
// function checkNumbers(array) {
//     return array[array.legth-1]; 

// }
// console.log(checkNumbers(number));



// viết 1 function 
// nhận vào 1 đối số là 1 mảng bất kỳ 
// nếu tất cả phần tử trong mảng là string
// thì trả về 1 string lớn ghép tất cả các phần tử lại 
// nếu chỉ có 1 phần tử ko phải string thì trả về false

// let letter = ["duy", "học", "lập","trình"]
// function checkString(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] !== "string"){
//             return false
//         }
//     } 

//     return array.join("");

// }
// console.log(checkString(letter));




// tạo 1 mảng students
// mỗi phần tử của mảng students là 1 student
// mỗi student có 1 object có id, name, age
// viết  function nhận vào 1 đối số có 1 mảng là students
// trả về 1 mảng con chứa các student có age < 15

// let student1 = {
//     id: 1,
//     name: "Nguyen Van A",
//     age: 25,
// }

// let student2 = {
//     id: 2,
//     name: "Nguyen Van B",
//     age: 14,
// }
// let student3 = {
//     id: 3,
//     name: "Nguyen Van C",
//     age: 12,
// }
// let student4 = {
//     id: 4,
//     name: "Nguyen Van D",
//     age: 13,
// }
// let listStudents = [student1, student2, student3, student4];
// function checkStudents(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].age < 15) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// console.log(checkStudents(listStudents));
// console.log(listStudents);



// viết function tính tổng các phần tử là số trong mãng trên 
// let arrayA = [1, 2, 3, 'a', 'b']
// function sum(arrayA) {
//     let result = 0;
//     let result2 = 0;
//     for (let i = 0; i < arrayA.length; i++) {
//         if (typeof arrayA[i] == "number") {
//             result += arrayA[i]

//         } else {
//             result2++
//         }

//     }
//     return {
//         tongCacNumber: result,
//         tongConLai: result2
//     };

// }

// console.log(sum(arrayA).tongCacNumber)
// console.log(sum(arrayA).tongConLai);

// let student = [
//     {
//         id: 1,
//         name: "dyu",
//         age:25,
//     },
//     {
//         id: 1,
//         name: "dyu",
//         age: 28,
//     },
//     {
//         id: 1,
//         name: "dyu",
//         age: 30,
//     },
//     {
//         id: 1,
//         name: "dyu",
//         age: 18,
//     },
//     {
//         id: 1,
//         name: "dyu",
//         age: 30,
//     },
//     {
//         id: 1,
//         name: "dyu",
//         age: 20,
//     },
// ]
// for (const listStudents of student) {
//     console.log("value", listStudents);
// }



// let arrayA = [1,2,3,4,5,6,7];
// function aloi(array) {
//     let countString, countNumber, countArray, countObject = 0;
//     for (let i = arrayA.length; i >= 0; i--) {
//         if (typeof arrayA[i] == "string") {
//             countString++
//         } else if (typeof arrayA[i] == "number") {
//             countNumber = countNumber + 1
//         } else if (typeof arrayA[i] == "object") {
//             ++countObject
//         } else {
//             countArray++
//         }

//     } 
//     return [countString, countNumber, countArray, countObject]
// }

// console.log(aloi(arrayA));


// function cssDivRoot(id) {
//     let rootElement = document.getElementById(id);
//     rootElement.style.backgroundColor = 'red'
//     rootElement.style.width = '100px'
//     rootElement.style.height = '100px'
//     rootElement.style.borderRadius = '50%'

// }




// let listUser = [{
//     id: 01,
//     name: "Nguyen Van Akta",
//     age: 77
// }, {
//         id: 35,
//         name: "Nguyen Van Arty",
//         age: 88
//     }, {
//         id: 48,
//         name: "Nguyen Van Asda",
//         age: 99
//     }, {
//         id: 77,
//         name: "Nguyen Van Abxc",
//         age: 102
//     }, {
//         id: 68,
//         name: "Nguyen Van Ab",
//         age: 55
//     }]






// let tableRoot = [
//     {
//         id: 01,
//         name:"Duy",
//         age:20,
//         sex: true
//     },
//     {
//         id: 01,
//         name:"Duy",
//         age:20,
//         sex: true
//     },
//     {
//         id: 01,
//         name:"Duy",
//         age:20,
//         sex: true
//     },
//     {
//         id: 01,
//         name:"Duy",
//         age:20,
//         sex: true
//     }
// ]
// function renderTableRoot(tableRoot) {
//     let information = document.getElementById('tableRoot');
//     let tableData = `
//     <tr>
//             <th>STT</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Sex</th>
//         </tr>
// `;
// for (let i in tableRoot) {
//     tableData += `
//     <tr>
//             <td>${Number(i)+1}</td>
//             <td>${tableRoot[i].name}</td>
//             <td>${tableRoot[i].age}</td>
//             <td>${tableRoot[i].sex ? "Nam":"Nữ"}</td>
//         </tr>
//     `
// }
//     information.innerHTML = tableData
// }
// renderTableRoot(tableRoot);



// let number = [1,2,3,4,5,6,7];
// function renderNumber(numberCheck){
//     let renderNumber = document.getElementById("numBer");
//     let numberData = `            
//     `
// }




























