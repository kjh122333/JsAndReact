/** 
 * 2019 . 07 . 30 . 화요일
 * 
*/
//함수 : 형식1 : 인수전달x 리턴x
function f1() {
    console.log("I'm f1()");
}
f1();   //call

/**------------------------------------ */
//함수 : 형식2 : 인수전달 o, 리턴 x 
// function f2(let a,let b) { : 매개변수 타입 불가
function f2(a, b) {
    console.log("I'm f2()");
    console.log(typeof a, a, "|" ,typeof b,  b);

}
f2(10, 'tiger');   //call

/**------------------------------------ */
//함수 : 형식3 : 인수전달 x 리턴 o
function f3() {
    console.log("I'm f3()");
    return 100;
}
console.log(f3());


/**------------------------------------ */
//함수 : 형식4 : 인수전달 o 리턴 o
function f4(c, d) {
    console.log("I'm f4()");
    console.log(typeof c, c, "|" ,typeof d,  d);
    return c + d;
}
console.log(f4(10, 'tiger'));



//함수 :  '=>'1 : 인수전달x 리턴x
const arrow1 = () => { 
    console.log("I'm arrow1()");
}
arrow1();

//함수 :  '=>'1 : 인수전달x 리턴x
const arrow2 = (a1, b1) => { 
    console.log("I'm arrow2()", a1 + b1);
}
arrow2(10, 100);

//함수 :  '=>'1 : 인수전달x 리턴x
const arrow3 = () => { 
    console.log("I'm arrow3()");
    return 100
}
console.log(arrow3());


//함수 :  '=>'1 : 인수전달x 리턴x
const arrow4 = (c1, d1) => { 
    console.log("I'm arrow4()");

    return c1 + d1
}
let num2 = arrow4(10,100);
console.log(num2);

