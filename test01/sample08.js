/** 
 * 
 * 
 * 
*/

//어떤 타입이던 박을수 있다
let ar = [10, 'gjh',0.01 ,true, {}];

console.log(ar);

//일반 for문
for (let index = 0; index < ar.length; index++) {
    console.log(index, ar[index]);        
}

//for in
for (const index in ar) {

    console.log(index, ar[index]);
}


ar.forEach(function(index){console.log(index, ar[index]);
});

ar.forEach(index => console.log(index, ar[index]));