/**
 *  2019 . 7 . 31 . 수
 */

// let obj1 = {
//     a: 10,
//     b: 20
// };

// obj1.a = 30;

// delete obj1.a;

// console.log(obj1);


// const a = 3;

// console.log(a);
// console.log(a.);



const obj2 = {
    a: 10, b: 20, c: 30
};

obj2.a = 1000000;
console.log(obj2);

Object.freeze(obj2);    //객체 동결

obj2.a = 100;
obj2.b = 200;
console.log(obj2);

Object.defineProperties(obj2.a, obj2.b)

obj2.a = 1000;
obj2.b = 2000;
console.log(obj2);

/**
 * 1) 오프젝트 프리즘
 * 
 */