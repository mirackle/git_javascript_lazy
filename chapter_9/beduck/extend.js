function extend(o, v) {
    for(var i in v) {
        if(v.hasOwnProperty(i)) {
            o[i] = v[i];
        }
    }
}