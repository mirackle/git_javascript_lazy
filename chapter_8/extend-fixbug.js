// 定义一个扩展函数,用来将第二个以及后续参数复制到第一个参数
var extend = (function() {
  for(var p in { toString: null })
    return function extend(o) {
        for(var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for(var prop in source) o[prop] = source[prop];
        }
      return o;
    };

    var protoprops = [
      "toString", "valueOf", "constructor", "hasOwnProperty",
      "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];

    return function patched_extend(o) {
      for(var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for(var prop in source) o[prop] = source[prop];

        for(var j = 0; j < protoprops.length; i++) {
          prop = protoprops[j];
          if(source.hasOwnProperty()) o[prop] = source[prop];
        }
      }

      return o;
    }
}());