function inherit(p) {
  if(p == null) throw TypeError();
  if(Object.create) return Object.create(p);

  var t = typeof p;
  if(t !== "object" && t !== "function") throw TypeError();

  function f() {};
  f.prototype = p;

  return new f();
}

function extend(o, p) {
  for(prop in p) o[prop] = p[prop];

  return o;
}

function merge(o, p) {
  for(prop in p) if(!o.hasOwnProperty[prop]) p[prop] = p[prop];

  return o;
}

function restrict(o, p) {
  for(prop in o) if(!(prop in p)) delete o[prop];

  return o;
}

function subtract(o, p) {
  for(prop in p) delete o[prop];

  return o;
}

function  union(o, p) {
  return extend(extend({}, o), p);
}

function intersection(o, p) {
  return restrict(extend({}, o), p);
}

function keys(o) {
  if(typeof o !== "object") throw TypeError();

  var result = [];
  for(prop in o) if(o.hasOwnProperty) result.push(prop);

  return result;
}
