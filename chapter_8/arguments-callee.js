var foo = function finati(n) {
  if(n < 0) return 1;
  return n + finati(--n);
};

var boo = function(n) {
  if(n < 0) return 1;
  return n + arguments.callee(--n);
}