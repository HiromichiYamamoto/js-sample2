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
