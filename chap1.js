function Human(name) {
  this.name = name;
}
//プロトタイプとして共通化することでgreet分のメモリを節約
Human.prototype.greet = function() {
  console.log("Hello " + this.name);
};

var mike = new Human("Mike");
mike.greet();

var bob = new Human("Bob");
bob.greet();

//クロージャ

function createCounter() {
  var count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

var counter1 = createCounter();
counter1();
counter1();
counter1();

var counter2 = createCounter();
counter2();
counter2();

count = 100;
counter1();


// オブザーバー
function Observer() {
  this.listeners = {};
}

Observer.prototype.on = function(event, func) {
  if (! this.listeners[event] ) {
  this.listeners[event] = [];
  }
  this.listeners[event].push(func);
}

Observer.prototype.off = function(event, func) {
  var ref = this.listeners[event],
      len = ref.length;
  for (var i = 0; i < len; i++) {
    var listener = ref[i];
    if (listener === func) {
      ref.splice(i, 1);
    }
  }
};

Observer.prototype.trigger = function(event) {
  var ref = this.listeners[event];
  for (var i = 0, len = ref.length; i < len; i++) {
    var listener = ref[i];
    if(typeof listener === "function") listener();
  }
};

var observer = new Observer();
var greet = function() {
  console.log("Good morning");
};
observer.on("morning", greet);
observer.trigger("morning");

var sayEvening = function() {
  console.log("Good evening");
};
observer.on("evening",sayEvening);
observer.trigger("evening");
