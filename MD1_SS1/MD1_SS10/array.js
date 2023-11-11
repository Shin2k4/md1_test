//sử dụng hàm có sẵn của mảng
// Bài 1:
// let myColor = [
//     "Lion",
//     "Tiger",
//     "Wolf",
//     "Kangaroo"
// ];
// console.log(myColor.join());

// Bài 2:

// let num = window.prompt("mời bạn nhập số!");
// let stt = num.toString();
// let result = [stt[0]];

// for (let i = 1; i < stt.length; i++) {
//     if( stt [i-1] % 2 === 0 && stt[i] %2 === 0) {
//        result.push("-",stt[i]); 
//     }else{
//         result.push(stt[i]);

//     }
// }
// console.log(result.join(''));


// Bài từ điển:

let voCabulary = ["vocabulary", "words", "tone"];
let temporaryTranslation = ["Từ vựng", "từ ngữ","âm điệu"];


function dictionary(array) {
    let array = [];
     
    for (let i = 0; i < array.length; i++) {
        
        for (let x = 0; x < voCabulary.length; x++) {
            if (array[i].length = voCabulary[i].length){
                return console.log(voCabulary[i].length);
            }else{
                console.log("không có gì");
            }
            
        }
        
    }
}
// console.log(dictionary());
