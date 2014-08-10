var a = {};
for(var i = 0; i < 10; i ++) a[i] = i;
a.length = i;
// 很高大上的自己实现了，叼！
console.log(Array.prototype.reduceRight.call(a, function(x, v) { return x + v;}, 0));

// 字符串也是一种类数组哦
var s = "JavaScript";
var sJoin = Array.prototype.join.call(s, " ");
var sFilter = Array.prototype.filter.call(s, function(v) { return v.match(/[^aeiou]/)}).join();
console.log(sJoin);
console.log(sFilter);