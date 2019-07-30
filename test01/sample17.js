// const f1 = ()=>{
//     console.log("f1");

//     const f2 = () =>{
//         console.log("f2");
//         return ()=>({
//             name : "김기범",
//             weight : 200,
//         });
//     }
//     // return f2();
//     return f2;
// };

// const f3 = f1();
// f3();



// const f4 = () =>{
//     const f2 = (n, s)=>{
//         console.log(n,s);
//     }
//     return f2;
// };

// f4()(10,5);

// const f1 = n1 => n2 => {
//     console.log(n1, n2);
// };

// f2(100)(200);



// const f1 = (n1) => (n2) => {
//     console.log(n1, n2);
//   };

//   f1("f1 outter")("f1 inner"); 

//   const f2 = n1 => n2 => {
//     console.log(n1, n2);
//   };

//   f2("f2 outter")("f2 inner");

//   const f3 = n1 => n2 => console.log(n1, n2);
//   f3("f3 outter")("f3 inner");

// const f1 = () => {
//     const f2 = () => {
//     };
// };

// const f1 = (n1) => {
//     const f2 = (n2) => {
//     };
// };

// const f1 = (n1) => {
//     const f2 = (n2) => {
//     };
// };


// const f1 = (n1) => {

//   return (n2) => {
//     console.log("arrow");
//   };
// };

// const f1 = (n1) => {
//   return (n2) => 
//     console.log("arrow");
// };

// const f1 = (n1) => (n2) => console.log(n1,n2);

// f1("f1 outter")("f2 inner");


// 클로져 : 함수내 함수가 존재할때 내부함수가 외부함수의 지역 변수를 호출시 계속 살아남게(추가적으로 더) 된다
// let f1 = function () {
//     let n1 = 10;

//     let f2 = function () {
//         let s1 = 'tiger';
//         console.log(s1);
//         console.log(n1);
//     };
//     return f2;
// };

// const call1 = f1();
// call1();