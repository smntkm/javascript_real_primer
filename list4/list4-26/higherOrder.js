function arrayWalk(data, f) {
  for (var key in data) {
    f(key, data[key]);
  }
}

function showElement(key, value) {
  document.writeln(key + ' : ' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);
