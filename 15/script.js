// 1. プロパティーとメソッドの違いをまとめて3つほどメソッドを作成
// プロパティはvalueがシンプルに文字列や数値の値をあてはめるものであるのに対して、メソッドはvalueが関数（アクション）になっているもの。

// first
const list = {brand:"三菱",color:"white",drive:function()
{console.log("車が動きます");}};
list.drive();

// second
const numberObject = {value:6,double:function(){
console.log(this.value * 2);
}};
numberObject.double();

// third
const arrayObject = {
    items:[1,2,3,4,5],
    getItem: function() {
        const randomIndex = Math.floor(Math.random() * this.items.length);
        console.log(this.items[randomIndex]);
    }
};
arrayObject.getItem();

// 2. 下記の関数を実⾏してその結果をコンソールに表⽰
//  function fruit(name, price) {
//  const result = name + "の値段は" + price + "円です。"
//  return result
// };

function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
}

console.log(fruit("いちご",580));

// 3. 下記の関数を経由して2つの関数を実⾏するような処理
// function addTax(price, func) {
    // priceは値段
    // funcは実⾏する関数名
    // 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
    // const taxPrice = Math.round(price * 1.10);
//    }
   // トマトの税込み価格をコンソールに表⽰させる処理
   // ⽟ねぎの税込み価格をコンソールに表⽰させる処理

   function addTax(price, func) {
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
   }

   function showTomatoPrice(price) {
    console.log("トマトの税込み価格は" + price + "円です。");
   }

   function showOnionPrice(price) {
    console.log("玉ねぎの税込み価格は" + price + "円です。");
   }

   addTax(200,showTomatoPrice);
   addTax(100,showOnionPrice);