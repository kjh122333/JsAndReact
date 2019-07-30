// var str = " ";
// str += "rabbit";

// str += "   ";

// str += "tutle";
let num = 5

for (i = 1; i < (num / 2 + 1); i++) {
    txt = "";
    for (j = i; j < num + 1; j++) {
        txt += " ";
    }
    for (k = 0; k < (i * 2) - 1; k++) {
        txt += "*";
    }
    console.log(txt);
}
var txt = "";
for (i = (num / 2-(0.5))  ; i >= 1; i--) {
    txt = "";
    for (j = i; j < num + 1; j++) {
        txt += " ";
    }
    for (k = 0; k < (i * 2) - 1; k++) {
        txt += "*";
    }
    console.log(txt);
}


console.log(5/2);


//   for(i=1;i<=5;i++){
//     txt = "";
//     for(j=i;j<10;j++){
//       txt += " ";
//     }
//     for(k=0;k<(i*2)-1;k++){
//       txt += "*";
//     }
//     console.log(txt);
//   }
//   var txt = "";
//   for(i=5-1;i>=1;i--){
//     txt = "";
//     for(j=i;j<10;j++){
//       txt += " ";
//     }
//     for(k=0;k<(i*2)-1;k++){
//       txt += "*";
//     }
//     console.log(txt);
//   }