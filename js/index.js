const MIN = 1;
const MAX = 10;

let btn_start = document.querySelector('[data-js="start"]');
let btn_stop = document.querySelector('[data-js="stop"]');
let elm_result = document.querySelector('[data-js="result"]');
let elm_usd = document.querySelector('[data-js="usd_nums"]')
let roulette;
let stock_numbers = [];
let used_numbers = [];

set_numbers(MIN, MAX);
console.log(navigator.userAgent);
// Startボタン押下・・・Stopボタンに表示が切り替わり乱数のルーレットが始まる。

btn_start.addEventListener("click", function(e) {
  if(stock_numbers.length > 0){
    this.classList.remove("is_show");
    btn_stop.classList.add("is_show");
    start_roulette(30);
  } else {
    if (window.confirm("全て出し終えました。リスタートしますか？")){
      elm_usd.innerHTML = '';
      elm_result.innerText = '';
      set_numbers(MIN, MAX);
      used_numbers = [];
    }
  }
});
// STOPボタン押下・・・Startボタンに表示が切り替わり乱数のルーレットが止まり。ランダム生成された整数が表示される。
btn_stop.addEventListener("click", function(e) {
  this.classList.remove("is_show");
  btn_start.classList.add("is_show");
  stop_roulette();
  let num = elm_result.innerText;

  // used_numbers配列内に変数numの数字が含まれていなかったら、
  // その数字をstock_numbers配列にpushし、stock_numbers配列の更新をかける
  if(!used_numbers.includes(num)){
    used_numbers.push(num);
    stock_numbers = stock_numbers.filter(function(val){
      return val != num;
    });
    line_up_used_nums();
  }
});
  
  // 実装中　配列used_numbers内の数字を１つずつ取り出し、HTMLに要素としてappend
  // stopボタン押下ごとに処理が走る
  // appendしたい要素の形 <span class="usd_num">7</span>
  // 上記要素がused_numbers配列のindex分増えていく
function line_up_used_nums(){
  let tmp;
  for(i=0; i<used_numbers.length; i++ ){
    tmp += `<span class="usd_num">${used_numbers[i]}</span>`;
  }
  elm_usd.innerHTML = tmp;
  // tmp = '';
}
