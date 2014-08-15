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
  for(; i < len; i ++) if(i in this) results.push(f(this[i], i, this));

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
var arrNot = { x:1, y:2 }


var afunc = function(v, i, a) {  return v * v; }
console.log("------------ ", arr.$4map(afunc), arr.map(afunc));
console.log("------------ ", Array.prototype.$4map.call(arrLike, afunc), Array.prototype.map.call(arrLike, afunc));
console.log("------------ ", Array.prototype.$4map.call(arrNot, afunc), Array.prototype.map.call(arrNot, afunc));
console.log("------------ ", Array.prototype.map.call("234567890", afunc));

console.log(">>>>>>>>>>>>>>>>>>>>>> hava a good day, kimmy <<<<<<<<<<<<<<<<<<<");
Array.prototype.$4reduce = function(f, initValue) {
  console.log("----this: ", this)
  if(!this.length) return ;

  if(initValue === undefined || initValue === null) initValue = this[0];

  var i = 0, len = this.length;
  for(; i < len; i ++) if(this[i]) initValue = f(initValue, this[i]);

  return initValue;
};
var refunc = function(x, y) { return x + y; };
console.log("------------ ", arr.$4reduce(refunc, 100000000), arr.reduce(refunc, 10000000));
console.log("------------ ", Array.prototype.$4reduce.call(arrLike, refunc), Array.prototype.reduce.call(arrLike, refunc));
// console.log("------------ ", Array.prototype.$4reduce.call(arrNot, refunc), Array.prototype.reduce.call(arrNot, refunc)); 原生reduce方法直接报错

console.log(">>>>>>>>>>>>>>>>>>>>>> hava a good day, kimmy <<<<<<<<<<<<<<<<<<<");
var map = Array.prototype.map 
  ? function(a, f) { return a.map(f); }
  : function(a, f) {
    var results = [];
    for(var i = 0; i < a.length; i ++) if(i in a) results
  }

var reduce = Array.prototype.reduce 
  ? function(a, f, initial) {
    if(arguments.length > 2) return a.reduce(f, initial);
    return a.reduce(f);
  }
  : function(a, f, initial) {
    var i = 0, len = a.length;
    var accumulator;

    if(arguments.length > 2) accumulator = initial;
    else {
      if(len == 0) throw TypeError();
      while(i < len) {//accumulator赋值为数组中第一个定义的索引
        if(i in a) {
          if(i in a) { accumulator = a[i++]; break; }
          else i++;
        }
        if(i == len) throw TypeError();
      }
    }

    for(i < len; i++) if(i in a) accumulator = f.call(undefined, accumulator, a[i], i, a);

    return accumulator;
  }