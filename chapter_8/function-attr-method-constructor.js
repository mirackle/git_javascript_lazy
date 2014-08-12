/* arguments.length表示传入函数的实数个数, Function.length表示声明时的形参个数 */
console.log("------------------------------------");

function check(args) {
  var actual    = args.length;
  var expected  =  args.callee.length;
  if(actual !== expected) console.warn("Expected: " + expected + "; Actual: " + actual);
}

(function(x, y, z) { check(arguments); return x + y + z; }());

/* prototype属性 */

/* call 和 apply */
console.log("------------------------------------");
//将对象o中名为m的方法替换为另一个方法
function trace(o, m) {
  var original = o[m];
  o[m] = function() {
    console.log(new Date(), "Entering:", m);
    var result = original.apply(this, arguments); // this是对象o.因为此函数挂载到了对象o
    console.log(new Date(), "Exiting:", m);

    return result;
  }
}

var foop = {
  say: function(arg0, arg1, arg2) {
    console.log("arg0", arg0);
    console.log("arg1", arg1);
    console.log("arg2", arg2);
  }
}

foop.say("wo", "shi", "vv");
trace(foop, "say");
foop.say("ni", "hao ?", "hao jiu bu jian");

/* bind() */
console.log("------------------------------------");

function mybind(o, func) {
  if(typeof o !== "object" || typeof func !== "function")
    throw Error(">>> typeof error");

  return function() { func.call(o, arguments); };
}

var o = {
  name: "this o";
};

function say() {
  console.log("say name:", this.name);
}
