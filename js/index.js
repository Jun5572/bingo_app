const MIN = 1;
const MAX = 10;
const start = "START";
const stop = "STOP";
const reset = "RESET";

let btn_start = document.querySelector('[data-js="start"]');
let btn_stop = document.querySelector('[data-js="stop"]');
let elm_result = document.querySelector('[data-js="result"]');
let elm_usd = document.querySelector('[data-js="usd_nums"]')
// let roulette;
let stock_numbers = [];
let used_numbers = [];


// 画面読み込みされたらstock_numbersを配列でセット
set_numbers(MIN, MAX);
// Startボタン押下・・・Stopボタンに表示が切り替わり乱数のルーレットが始まる。
btn_start.addEventListener("click", function() {
  if(stock_numbers.length > 0){
    this.classList.remove("is_show");
    btn_stop.classList.add("is_show");
    start_roulette(30);
  }
  if (stock_numbers.length === 0) {
    if (window.confirm("リセットして始めからやり直しますか？")) {
      elm_usd.innerHTML = "";
      elm_result.innerText = "";
      btn_start.innerText = start;
      set_numbers(MIN, MAX);
      used_numbers = [];
    }
  }
});
// STOPボタン押下・・・Startボタンに表示が切り替わり乱数のルーレットが止まり。ランダム生成された整数が表示される。
btn_stop.addEventListener("click", function(){
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
  if (stock_numbers.length === 0) {
    btn_start.innerText = reset;
  }
});
  

