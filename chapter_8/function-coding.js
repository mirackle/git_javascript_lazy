console.log(">>>>>>>>>>>>>>>>>>>>>> hava a good day, kimmy <<<<<<<<<<<<<<<<<<<");
var data  = [1, 1, 3, 5, 5];
var total = 0;

for(var i = 0; i < data.length; i++) total += data[i];

var mean = total/data.length;
console.log("平均数", mean);

total = 0;
for(var i = 0; i < data.length; i++) {
  var deviation = data[i] - mean;
  total += deviation * deviation;
}

var stddev = Math.sqrt(total/(data.length - 1));
console.log("期望值", stddev);

console.log(">>>>>>>>>>>>>>>>>>>>>> hava a good day, kimmy <<<<<<<<<<<<<<<<<<<");
Array.prototype.$4map = function(f) {
  if(this.length == 0) return [];

  var results = [], i = 0, len = this.length;
  for(; i < len; i ++) if(this[i]) results.push(f(this[i], i, this));

  return results;
};

var arr     = [89, 1, -3, 9, 135, 0, 8];
var arrLike = {
  0: 0, 
  1: 778, 
  2: -12, 
  3: 8001, 
  length: 4, 
  arr: 9,
  func: function() { console.log(">>>> func"); },
  fun: function() { console.log("<<<< fun"); }
};

var afunc = function(v, i, a) { console.log("v:", v, "i:", i, "a:", a); return v * v; }
console.log("------------ ", arr.$4map(afunc), arr.map(afunc));
console.log("------------ ", Array.prototype.$4map.call(arrLike, afunc), Array.prototype.map.call(arrLike, afunc));

console.log(">>>>>>>>>>>>>>>>>>>>>> hava a good day, kimmy <<<<<<<<<<<<<<<<<<<");
Array.prototype.$4reduce = function(f) {

};
var refunc = function(x, y) { return x + y; };
console.log("------------ ", arr.reduce(refunc), arr.$4reduce(refunc));