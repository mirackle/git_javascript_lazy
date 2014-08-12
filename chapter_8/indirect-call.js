var arrayLike = {
  0: "I am 0",
  1: "I am 1",
  2: "I am 2",
  length: 3,
  say: function() { console.log("I'm saying."); }
}

// this理解
console.log(Array.prototype.map.call(arrayLike, function(v) { return v += " <<< "; }));
arrayLike.map = Array.prototype.map;
console.log(arrayLike.map(function(v) { return v += " ---"; }));