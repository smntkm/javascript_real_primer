function printf(format) {
  for(var i = 1; i < arguments.length; i++) {
    var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
    format = format.replace(pattern, arguments[i]);
  }
  document.writeln(format);
}

printf('こんにちは、{0}さん。私は{1}です。', '掛谷', '山田');