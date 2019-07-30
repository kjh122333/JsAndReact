// 작은 창(다일로그)
// prompt
// alert

// function f1(){
//     console.log(arguments);
// }
// f1(1,2,3,4,5,"5");

// console.log(Math.abs(-5));

// console.log(Math.sqrt(4));


// setTimeout(() => {
//     console.log("Arrow");

// }, 3000);
// console.log("test");
var obj = {
    a: 10,
    b: 20,
};

with (obj) {
    console.log(a);
    console.log(b);



}


let obj2 = {
    name: "Kong Junghwan",
    age: 100
}

// let name = obj.name;
// let age = obj.age;

//비구조화 할당
// const {
//     age,names
// } = obj;

// const { name, age } = obj;

// console.log(name,age);

// var array = ['node.js', {}, 10, true];
// var node = array[0];
// var object = array[1];
// var boolean = array[3]; //원래 방법


//객체의 비구조화(객체의 속성을 같은 이름의 변수에 대입하는 경우)
//비구조화 할당 사용 시
// const array                                                          