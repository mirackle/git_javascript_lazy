var geval = eval;
var x = "global", y = "global";
function f() {
  var x = "local";
  eval("x += '-changed';");

  return x;
}
function g() {
  var y = "local";
  geval("y += '-changed';");

  return y;
}

console.log(f(), ":", " global x=" + x);
console.log(g(), ":", " global y=" + y);