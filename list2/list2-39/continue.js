var result = 0;
for (var i = 0; i < 100; i ++) {
  if (i % 2 == 0) { continue; }
  result += 1;
}
document.writeln('合計:' + result);
