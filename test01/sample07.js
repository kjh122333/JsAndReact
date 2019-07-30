/*객체 */
let obj = {
    a : 10,
    b : 'hi',
    c : true
};

obj.a;

for (const item in obj) {
   console.log(obj[item], item);
}