function Set() {
  this.values = {};
  this.n      = 0;    
    this.add.apply(this, arguments); // 有了arguments,就不需要重载构造方法了
  }

// 将每个参数添加到集合里
Set.prototype.add = function() {
  for(var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if(!this.values.hasOwnProperty(str)) {
      this.values[str] = val;
      this.n ++;
    }
  }

  return this;
};

// 从集合删除元素,这些元素由参数指定
Set.prototype.remove = function() {
  for(var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if(this.values.hasOwnProperty(str)) {
      delete this.values[str];
      this.n --;
    }
  }

  return this;
};

// 如果集合包含这个值,则返回true;否则,返回false
Set.prototype.contains = function(value) {
  return this.values.hasOwnProperty(Set._v2s(value));
};

// 返回集合的大小
Set.prototype.size = function() { 
  return this.n; 
};

// 遍历集合中所有的元素,在指定的上下文中调用f
Set.prototype.foreach = function(f, context) {
  for(var s in this.values) {
        if(this.values.hasOwnProperty(s)) // 忽略继承属性
          f.call(context, this.values[s]);
      }
    };

// 将任意JavaScript值和唯一的字符串对应起来
Set._v2s = function(val) {
  switch(val) {
    case undefined : return "undefined";
    case null      : return "null";
    case true      : return "true";
    case false     : return "false";
    default        : 
    switch(typeof val) {
      case "number" : return "#" + val;
      case "string" : return "\"" + val;
      default       : return "@" + objectId(val);
    };
  }    

  function objectId(o) {
    var prop = "|**objectId**|";
    if(!o.hasOwnProperty(prop)) 
      o[prop] = Set._v2s.next ++;
    return o[prop];
  }
};

Set._v2s.next = 101;// 设置初始id的值
