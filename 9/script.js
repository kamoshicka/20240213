'use strict'

// 1. 変数の中にtrueまたは、falseが代⼊された時の処理
var condition = true;
var result = condition ? "left" : "right";
console.log(result);

// 2. 代⼊された変数の中が5より⼤きい時にtrueの処理と、5より⼩さい時にfalseの処理
var condition = 6;
var result = 5 < condition ? true : false;
console.log(result);

// 3. 代⼊された変数の中が5より⼩さい時にtrueの処理と、5より⼩さい時にfalseの処理
var condition = 4;
var result = 5 > condition ? true : false;
console.log(result);

// 4. 代⼊された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理
var condition = 1;
var result = 10 <= condition ? true : false;
console.log(result);

// 5. 代⼊された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理
var condition = "";
var result = condition ? true : false;
console.log(result);