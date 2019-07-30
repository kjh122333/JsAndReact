/**
 *  2019 . 7 . 31 . 수
 */


//  //오버라이딩 : 동일 함수는 이전에 함수는 컴파일 대상이 안됨
//  function f1(){
//     console.log("f1()");
//  }

//  function f1(a1){
//     a1 = 3;
//     console.log("f1()");
//     console.log(a1);
//  }

// function f1(a, b) {
//     console.log("f1()");

//     console.log('a : ', a, 'b : ', b);
// }

// f1(10);
// f1(10, 20);
// f1(10, 20, 30);

//---------------------------------------------------------------------- 
// function f2(a = 10, b, c = 99) {
//     console.log("f2()");

//     console.log('a : ', a, 'b : ', b, 'c : ', c);
// }
// f2();
// // f2(10, 20);
// // f2(10, 20, 30);

//---------------------------------------------------------------------- 
// //놓침
// function f3(f) {
//     console.log("f3()");

// }
// f3();

//---------------------------------------------------------------------- 
function f4(f) {
    console.log("f4()");

}

function f5() {
    console.log("f5()");

}

function f6() {
    console.log("f6()");
    return 100;
}

function f7() {
    console.log("f7()");
    return {};
}

function f8() {
    console.log("f8()");
    return f7;
}


function f9() {
    console.log("f9()");
    return f7();
}

console.log('--------------');
console.log(f7);
console.log('--------------');
console.log(f7());
console.log('--------------');
console.log(f8);
console.log('--------------');
console.log(f8());
console.log('--------------');
console.log(f9);
console.log('--------------');
console.log(f9());
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');




// f4(f5);
// console.log('------');
// f4(f5());
// console.log('------');
// f4(f6());
// console.log('------');
// var n = f6();
// console.log(n);

// console.log('------');
// console.log(f4(f5));

// console.log('------');
// console.log(f4(f5()));

// console.log('------');
// console.log(f4(f6()));

