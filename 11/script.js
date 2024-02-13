'use strict'

// 1. forを使ったループ処理
for (var i = 1; i <= 10; i++) {
  console.log(`${i}回目: Hello`);
}

// 2. for inを使ったループ処理
var Sociology = ["マルクス","アダム・スミス","マルサス"];
for (var index in Sociology) {
    console.log(Sociology[index]);
};

// 3. for ofを使ったループ処理
var menu = [
{ name:"ブイヤベース",
price:2500,
order: 4},
{name:"ガルビュール",
price:1200,
order:2},
{name:"パテカン",
price:1300,
order:1}
]
for (var one of menu)
{console.log(one);};