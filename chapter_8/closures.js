// 闭包笔试
for(var i = 0; i < 5; i++) {
  (function(local, arg0, arg1) {
    console.log(arguments);
    setTimeout(function() { console.log(local); }, local * 1000);
  }(i));
} 

// for赋值,与上异曲同工
function constfunc(v) { return function() { return v; }; }
var funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);
console.log("funcs[5]()", funcs[5]()); // =>5

for(var i = 0; i < 10; i++) funcs[i] = function() { return i; };
console.log("funcs[5]()", funcs[5]()); // =>10

for(var i = 0; i < 10; i++) funcs[i] = i;
console.log("funcs[5]", funcs[5]);
