function arrayWalk(data, f) {
  for (var key in data) {
    f(key, data[key]);
  }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, function (key, value) { document.writeln(key +' : ' + value); });
