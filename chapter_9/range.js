function Range(from, to) {
  this.from = from;
  this.to   = to;
}

Range.prototype = {
  say: function() { console.log(this.from, this.to); }
}