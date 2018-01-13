// var canvas = document.getElmentById("canvas");
var ctx = canvas.getContext("2d");

//描画タイミングを最適化する
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cd, 17);};

var x = 5;
var y = 5;

//長方形を描く
// ctx.beginPath(); //パスを初期化
// ctx.rect(0, 0, 100, 300); //
// ctx.fillStyle = "#99ff66"; //緑指定　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// ctx.fill(); //塗りつぶし
// ctx.closePath();

//円を描く
// ctx.beginPath();
// ctx.fillStyle = "#99ff66";
// ctx.arc(100, 100, 40, 0, Math.PI * 2);
// ctx.fill();
// ctx.closePath();

var interval = Math.floor(1000/60);
//図形描画
draw();

function draw() {
  //一度図形削除
  ctx.clearRect(0,0,500,500);
  //位置をずらす
  x += 5;
  y += 5;
  //再度図形を描画
  ctx.beginPath(); //パスを初期化
  ctx.rect(x, y, 100, 300); //
  ctx.fillStyle = "#99ff66"; //緑指定　　　　　　　　　　　　　　　　　　　　　　　　　　　　
  ctx.fill(); //塗りつぶし
  ctx.closePath();
  //一定時間を置く
  requestAnimationFrame(draw);

}
