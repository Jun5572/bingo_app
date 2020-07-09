const MAX = 10;
const MIN = 1;

let btn_start = document.querySelector('[data-js="start"]');
let btn_stop = document.querySelector('[data-js="stop"]');
let elm_result = document.querySelector('[data-js="result"]');
let elm_alreadys = document.querySelector('[data-js="already_nums"]')
let roulette;
let stock_numbers = [];
let used_numbers = [];


set_numbers(MIN, MAX);

// リファクタリングできそう＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// Startボタン押下・・・Stopボタンに表示が切り替わり乱数のルーレットが始まる。

btn_start.addEventListener("click", function(e) {
  if(stock_numbers.length > 0){
    this.classList.remove("is_show");
    btn_stop.classList.add("is_show");
    start_roulette(30);
  } else {
    console.log("FIN");
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
      elm_alreadys.innerHTML = `<p>${used_numbers}</p>`;
      line_up_used_nums();
      console.log(stock_numbers);
    }
  console.log(used_numbers);
});

function line_up_used_nums(){
  for(i=0; i<used_numbers.length; i++ ){
    console.log(used_numbers[i]);
    
  }
}
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
