var i = 1;
try {
  i = i * j;
} catch(e) {
  document.writeln(e.message);
} finally {
  document.writeln('処理は終了しました');
}
