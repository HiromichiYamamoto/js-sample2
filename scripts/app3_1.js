//描画タイミングを最適化する
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cd, 17);};

var canvas = document.getElementById( "canvas" ),
  ctx = canvas.getContext( "2d" ),
  NUM = 20,
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
  }
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
  ctx.rect( this.x, this.y, 4, 4 ); //
  ctx.fillStyle = "#99ff66"; //緑指定　　　　　　　　　　　　　　　　　　　　　　　　　　　　
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
