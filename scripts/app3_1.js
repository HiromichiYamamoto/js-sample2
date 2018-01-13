// var canvas = document.getElmentById("canvas");
var ctx = canvas.getContext("2d");

//描画タイミングを最適化する
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cd, 17);};

var x1 = 5;
var y1 = 5;
var x2 = 100;
var y2 = 5;
//１、一度図形を描画

render();

function render() {
  //２、一度図形を消去
  ctx.clearRect(0, 0, 500, 500);

  updatePosition();
  draw(x1, y1);
  draw(x2, y2);

  //５、一定時間を置く
  requestAnimationFrame( render );
}

function updatePosition() {
  //３、位置をずらす
  x1 += 5;
  y1 += 5;
  x2 += 5;
  y2 += 5;
}

function draw(posx, posy) {
  //４、再度図形を描画する
  ctx.beginPath(); //パスを初期化
  ctx.rect( posx, posy, 10, 20 ); //
  ctx.fillStyle = "#99ff66"; //緑指定　　　　　　　　　　　　　　　　　　　　　　　　　　　　
  ctx.fill(); //塗りつぶし
  ctx.closePath();
}
