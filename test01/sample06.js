let n = new Date();
let date = n.getDate();
let month = n.getMonth() + 1;
let year = n.getFullYear();
let hours = n.getHours();
let minutes = n.getMinutes();
let sec = n.getSeconds();

console.log(year + "년 " + month + "월 " + date + "일 " + hours + "시 " + minutes + "분 " + sec + "초");
