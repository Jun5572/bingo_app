//配列の中で乱数を生成する関数
//get_stock_num( 乱数の最小値, 乱数の最大値 )
function get_stock_num(min, max) {
  let rand_num = stock_numbers[Math.floor(Math.random() * stock_numbers.length)];
  return rand_num;
}

// stock_numbers配列に要素をセットする関数。
function set_numbers(min, max) {
  for (i = min; i <= max; i++) {
    stock_numbers.push(i);
  }
}

// 数字のルーレット表現させるための関数
function shuffle(min, max) {
  let shuffle_num = Math.floor(Math.random() * (max + 1 - min)) + MIN;
  return shuffle_num;
}

// Startボタン押下で数字をルーレット表示させている関数
function start_roulette(spd) {
  roulette = setInterval(() => {
    elm_result.innerHTML = shuffle(MIN, MAX);
  }, spd);
}

// Stopボタン押下でルーレット表示を止め、stock_numbersより取り出された整数を画面表示
function stop_roulette() {
  clearInterval(roulette);
  elm_result.innerHTML = get_stock_num(MIN, MAX);
}