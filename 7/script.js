'use strict'

var numA = 1;
var numB = 2;

if (numA == 1 && numB == 2) {
    console.log("ANDの条件と一致した処理");
    console.log(numA == 1 && numB == 2);
} else {
    console.log("ANDの条件と一致しなかった処理");
};

var numA = 3;
var numB = 4;

if (numA == 3 || numB == 5) {
    console.log("どちらかが一致した処理");
    console.log(numA == 3 || numB == 5);
} else {
    console.log("どちらも一致しなかい処理");
}


var num = 5;

if (num!==6) {
    console.log("NOTの条件と一致した処理");
    console.log(num);
} else {
    console.log("NOTの条件と一致しなかった処理");
    console.log(num);
}