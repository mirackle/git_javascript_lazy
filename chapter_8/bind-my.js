console.log("------------ log 1 --------------");
function f(y) { return this.x + y; }
var o = { x: 1 };
var g = f.bind(o);

function myBind(o, f) { return function() { return f.apply(o, arguments); }; }""

console.log("----------- log 2 ---------------");
var sum = function(x, y) { return x + y; }
var succ = sum.bind(null, 1);
console.log(succ(3));

console.log("----------- log 3 ---------------");
function f(y, z) { return this.x + y + z; }
var g = f.bind({ x:1 }, 2);
console.log(g(3));

console.log("------------- log 4 -----------------");
Function.prototype.bind = function(o) {
  var self = this, args = arguments;
  return function() {
    var args = [], i;
    for(i = 1; i < args.length; i ++) args.push(args[i]);
    for(i = 0; i < arguments.length; i ++) args.push(arguments[i]);

    return self.apply(o, arg);
  }
}