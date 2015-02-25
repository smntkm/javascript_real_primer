var result = 0;
for (var i = 0; i <= 100; i ++) {
  result += i;
  if (result > 1000) { break; }
}
document.writeln('合計1000を超えるのは' + i);
