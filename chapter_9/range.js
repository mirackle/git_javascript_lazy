function Range(from, to) {
  this[from] = from;
  this[to]   = to;

  look: "look_through",
  lookwork: function() { console.log("look", look); }
}