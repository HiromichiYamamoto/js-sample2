//描画タイミングを最適化する
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cd, 17);};

var canvas = document.getElementById( "canvas" ),
  ctx = canvas.getContext( "2d" ),
  NUM = 20, //数量
  particles = [],
  W = 500,
  H = 500

canvas.width = W;
canvas.height = H;

for(var i = 0; i < NUM; i++) {
  positionX = Math.random() * 120;
  positionY = Math.random() * 20;
  particle = new Particle(ctx, positionX, positionY);
  particles.push( particle );
}

function Particle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  //速度用のオブジェクト
  this.v = {
    x: Math.random()*10-5,
    y: Math.random()*10-5
  };
  this.color = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255),
    a: 1
  };
}

Particle.prototype.render = function() {
  this.updatePosition();
  this.wrapPosition();
  this.draw();
}

Particle.prototype.draw = function() {
  //４、再度図形を描画する
  ctx = this.ctx;
  ctx.beginPath(); //パスを初期化
  ctx.fillStyle = this.gradient();
  ctx.arc( this.x, this.y, 10, Math.PI*2, false);　　　　　　　　　　　　　　　　　　　　　　　　　　
  ctx.fill(); //塗りつぶし
  ctx.closePath();
}

Particle.prototype.updatePosition = function() {
  //３、位置をずらす
  this.x += this.v.x;
  this.y += this.v.y;
}

Particle.prototype.wrapPosition = function() {
  if(this.x < 0) this.x = W;
  if(this.x > W) this.x = 0;
  if(this.y < 0) this.y = H;
  if(this.y > H) this.y = 0;
}
//透明の円作成
Particle.prototype.gradient = function() {
  //描画色もランダムにする
  var col = this.color.r + ", " + this.color.g + ", " + this.color.b;
  var g = this.ctx.createRadialGradient( this.x, this.y, 0, this.x, this.y, 10)
  //色をつける
  g.addColorStop(0,   "rgba(" + col + ", 1)")
  g.addColorStop(0.5, "rgba(" + col + ", 0.2)")
  g.addColorStop(1,   "rgba(" + col + ", 0)")
  return g
}

//１、一度図形を描画
render();

function render() {
  //２、一度図形を消去
  ctx.clearRect(0, 0, W, H);
  //配列の各要素の関数renderを実行して図形を描画
  particles.forEach(function(e) { e.render(); });

  //５、一定時間を置く
  requestAnimationFrame( render );
}
