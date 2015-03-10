function arrayWalk(data, f) {
  for (var key in data) {
    f(key, data[key]);
  }
}

var result = 0;
function sumElement(key, value) {
  result += value;
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
document.writeln('合計値:' + result);
