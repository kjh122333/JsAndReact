/**
 *  2019 . 7 . 31 . 수
 */
const obj0 = { name: 'cat', age: 10, pay: 2000 };
const obj1 = { name: 'dog', age: 11, pay: 4000 };
const obj2 = { name: 'monkey', age: 12, pay: 6000 };
const obj3 = { name: 'lion', age: 13, pay: 8000 };
const obj4 = { name: 'sheep', age: 14, pay: 10000 };

//위 객체들을 한꺼번에 관리할 배열이 있으면 좋지않은가??
const array = [];

array[0] = obj0;
array[1] = obj1;
array[2] = obj2;
array[3] = obj3;
array[4] = obj4;

function getsum(age, pay) { return age * pay };

for (let index = 0; index < array.length; index++) {
    array[index].total = getsum(array[index].age, array[index].pay);
}

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);

}

