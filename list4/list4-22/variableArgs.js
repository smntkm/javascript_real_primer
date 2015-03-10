function sum() {
  var result = 0;
  for(var i = 0; i < arguments.length; i++) {
    var tmp = arguments[i];
    if (isNaN(tmp)) {
      throw new Error('指定値が数値ではありません:' + tmp);
    }
    result += tmp;
  }
  return result;
}
try {
  document.writeln(sum(1, 3, 5, 7, 9));
} catch(e) {
  window.alert(e.message);
}
