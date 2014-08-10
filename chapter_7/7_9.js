// forEach 
console.log("------------- forEach ---------------");
var data  = [1, 2, 3, 4, 5];
var sum   = 0;

data.forEach(function(value) { sum += value; });
console.log("sum", sum);

data.forEach(function(v, i, a) {a[i] = v * v;});
console.log("data", data);

data.forEach(function(v) { v += 10; });
console.log(data);

// map
console.log("------------- map ---------------");
var fsum = 1;
var a = [1, 2, 3];
var b = a.map(function(v) { fsum *= v; return v * v;});
console.log(b);
console.log(fsum);

// filter
console.log("------------- filter ---------------");
var a = [5, 4, 3, 2, 1];
var smallvalues = a.filter(function(v) { return v < 3; });
var everyother  = a.filter(function(v, i) { return i % 2 === 0; });
console.log(smallvalues);
console.log(everyother);
/* 压缩稀疏数组 */
var sparse = [, , 23, "w", null, 8];
console.log(sparse);
var dense = sparse.filter(function() { return true; });
console.log(dense);
var a = sparse.filter(function(v) { return v !== undefined && v !== null; })
console.log(a);

// every()和some()
console.log("------------- every AND some ---------------");
var a = [1, 2, 3, 4, 5, "every how"];
console.log(a.every(function(v) { return v < 10; }));
console.log(a.every(function(v) { return v %2 === 0; }));

console.log(a.some(function(v, i, a) { console.log("some",a[i]); return i >= a.length; }));

// reduce AND reduceRight
console.log("------------ reduce ---------------");
var a = [1, 2, 3, 4, 5, "every how"];
var a = [1, 2, 3, 4, 5];
var sum     = a.reduce(function(x, y) { console.log("x", x); console.log("y", y); return x + y; } , 0);
var product = a.reduce(function(x, y) { return x * y; }, 1);
var max     = a.reduce(function(x, y) { return (x > y) ? x : y});
console.log("sum", sum);
console.log("product", product);
console.log("max", max);

//indexOf AND lastIndexOf
function findall(a, x) {
  var results = [],
      len     = a.length,
      pos     = 0;

  while(pos < len) {
    pos = a.indexOf(x, pos);
    if(pos === -1) break;
    results.push(pos);
    pos += 1;
  }

  return results;
}
