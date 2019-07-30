///////////////////////////////////////////////
const f1 = (f4) => {
    console.log("f1");
    return () => {
    }
}

///////////////////////////////////////////////
const f3 = () => {
    console.log("f3");
}

///////////////////////////////////////////////
const f4 = () => () => {
    console.log("f4");
}
f1(f4());

///////////////////////////////////////////////
const f5=function (){
    return function (){
        console.log("f5");
        
    }
}
f1(f5);
f5()();

///////////////////////////////////////////////
const f6 = n => (n,s) => ({  })
// f6 : 인수 전달을 하나하고 그렇게 인수전달 받은 함수는 n,s를 받고 그 안에서 객체를 리턴함
//{ } : 객체를 만들기위해 생성

// const f7 = n => (n,s) => ({ 
//     a: 10, 
//     b: 'tiger', 
//     c: true, 
//     d: (n) => { 
//         console.log("name : " + n);
//      }, 
//     e: (s) => {
//             console.log("state : " + s);
//      }
// });

// let call_f7 = f7()().d();
// call_f7();