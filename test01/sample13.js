/** 
 * 2019 . 07 . 30 . 화요일
 * 
*/
//함수 : 형식1 : 호이스팅형식(함수 선언부와 호출부의 위치가 상관이 없다)
f1();   //call
function f1() {
    console.log("I'm f1()");
}
f1();   //call

/**------------------------------------ */
//함수 : 형식2 (선언부보다 호출부가 위에 있으면 error!)
//f2();   //error
var f2 = function () {
    console.log("I'm f2()");
}
f2();   //call

/**------------------------------------ */
//함수 : 형식3 : arrow
const f3 = () => { //함수는 선언후 수정을 안하기에 let (x) var (x) const (o)
    console.log("I'm f3()");
}
f3();

const obj = {
    f4: () => { console.log("I'm f4()"); }
};

// 클래스

class c1 {
    
     c1f1() {
        console.log("I'm c1f1()");
    }
    c1f3 = () => {
        console.log("I'm c1f3()");
    }
}
let test1 = new c1();

test1.c1f1();
test1.c1f3();


//