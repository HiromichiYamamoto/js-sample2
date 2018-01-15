var deferred = new Deferred();
setTimeout(function() {
  deferred.resolve();
}, 2000);

deferred.promise().then(function() {
  return $.ajax({
    url: "data.json"
  });
}).then(function(res) {
  console.log(res);
});


var deferred = new Deferred();
$("body").animate({
  marginTop: 100
}, {
  duration: 1000,
  complete: function() {
    deferred.resolve();
  }
});

deferred.promise().then(function() {
  console.log("done");
});
