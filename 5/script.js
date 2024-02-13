'use strict';

// 1. elseを使⽤する時の注意点
//　　ifと併用しないと使用できず、ifとelseの間に他の処理を挟めない。

// 2. JavaScriptで実装した時の確認ポイント
//    コンソールでのエラー表示の有無とその内容


var first = 101;
if(100>first)  {
    console.log('不正解');
} else {
    console.log('正解');
}

var str = "正解";
if('不正解' === str){
    console.log('やり直し');
} else {
    console.log(str);
}