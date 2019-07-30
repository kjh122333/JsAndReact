/** 
 * 2019 . 07 . 30 . 화요일
 * 
*/
//"const arrow1 = (num) =>{...}" : 괄호 생략 
const arrow1 = num => { 
    console.log("I'm arrow1()", num);
}
arrow1(10);


const arrow2 = () => 100;   // 아래와 같음
//스코프 생량 + 리턴 생략 (같이 생략 되냐됨)
// const arrow2 = () => { 
//     return 100;
// }
console.log("arrow2", arrow2());

let num = () => 100;
