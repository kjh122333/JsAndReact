/**
 *  2019 . 7 . 31 . 수
 */
// var korean = ["티스토리", "다음", "네이버", "드림위즈"];
// var english = ["Google", "Stackoverflow", "Yahoo!", "Ask", "Bing"];
// var others = ["Übel", "Ubah", "Atom", "Änderung", "Ansage"];
// var number = [100, 25, 5, 40, 1, 10];
// var string = ["100", "25", "5", "40", "1", "10"];
// var overall = ["티스토리", "Google", "Übel", "Ubah", 100, 25, "5", "40"];

// console.log(korean.sort());
// console.log(english.sort());
// console.log(others.sort());
// console.log(number.sort());
// console.log(string.sort());
// console.log(overall.sort());

// //--------------------------------------------
// console.log('-----------------------------');
// var months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]
// console.log('-----------------------------');
// var array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]


// console.log('-----------------------------');

// const ar = [{}, 10, 5 , 15];


// const obj0 = { name: 'cat', kor: 10, eng: 100, mat: 60 };
// const obj1 = { name: 'dog', kor: 40, eng: 12, mat: 30 };
// const obj2 = { name: 'tut', kor: 70, eng: 26, mat: 80 };


// //위 객체들을 한꺼번에 관리할 배열이 있으면 좋지않은가??
// const array = [];

// array[0] = obj0;
// array[1] = obj1;
// array[2] = obj2;

// function getsum(kor, eng, mat) { return kor + eng + mat };

// for (let index = 0; index < array.length; index++) {
//     array[index].total = getsum(array[index].kor, array[index].eng, array[index].mat);
// }


//   for (let index = 0; index < array.length-1; index++) {
//     array.sort(function (array, array) {
//         if (array[index].total > array[index+1].total) {
//           return 1;
//         }
//         if (array[index].total < array[index+1].total) {
//           return -1;
//         }
//         // a must be equal to b
//         return 0;
//       });
// }



// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  
  // value 기준으로 정렬
  items.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
console.log(items);








