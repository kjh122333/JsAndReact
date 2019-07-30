/** 
 * 2019 . 07 . 30 . 화요일
 * 
*/
const arrow1 = () => {
    console.log("I'm arrow1()");

    let a1 = { a: 10, b: 20 }; //객체 a
    return a1;
}
arrow1();


const arrow3 = () => {
    return {
        a: 10, b: 20
    }
}
console.log(arrow3());
console.log(arrow3().a1);


const arrow4 = () => ({ a: 10, b: 20 })
console.log(arrow4().a, arrow4().b);


const arrow5 = () => ({ })
const arrow6 = () =>  { 
    console.log("get debugging");
    return ; 
 }
