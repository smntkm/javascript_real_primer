for (var i = 1; i < 10; i ++) {
  for (var j = 1; j < 10; j++) {
    var k = i * j;
    if (k > 30) { break; }
    document.writeln(k + '&nbsp;');
  }
  document.writeln('<br />');
}
