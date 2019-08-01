function ff(n, k, e) {  // 생성자함수
  this.n = n;
  this.k = k;
  this.e = e;
  this.s = function () {
      return this.k + this.e;
  },
  this.output = function () {
      console.log(this.n, this.k, this.e, this.s())
  }
}
// 사용법
// const obj8 = new ff('고양이', 30, 20);
// console.log(obj8);  // 함수객체
 //함수를 new 해서 call하는 것은 생성자 함수이다



 /**es6 에서는 클래스로 표현함*/
//  class ff {
//   constructor(n, k, e) {
//     this.n = n;
//     this.k = k;
//     this.e = e;
//     this.s = function () {
//       return this.k + this.e;
//     },
//       this.output = function () {
//         console.log(this.n, this.k, this.e, this.s());
//       };
//   }
// }