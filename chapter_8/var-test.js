var strict = (function() { return !this;}());

var p = {
  "name": "p",
  "say" : function() { 
    console.log("say()", this.name); 
    return this;
  }
}

var q = {
  "work": function() { console.log("just do nothing"); }
}

