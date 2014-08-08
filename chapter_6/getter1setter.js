var getter_setter_p = {
  x:1.0,
  y:1.0,

  get r() { return Math.sqrt(this.x * this.y); },
  set r(val) {
    var oldvalue = Math.sqrt(this.x * this.y);
    var ratio = val / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },

  get theta() { return Math.atan2(this.y, this.x); }
}

var getter_setter_q = inherit(getter_setter_p);
console.log(getter_setter_q.r);
console.log(getter_setter_q.theta);