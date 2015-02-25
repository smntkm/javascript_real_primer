var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートはhttp://www.wings.msn.to/です';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく';

while ((result = p.exec(str)) != null) {
  document.writeln(p.lastIndex + ' : ' + result[0]);
  document.writeln('leftContext : ' + RegExp.leftContext);
  document.writeln('RightContext : ' + RegExp.rightContext);
  document.writeln('lastMatch : ' + RegExp.lastMatch);
  document.writeln('lastParen : ' + RegExp.lastParen);
  document.writeln('$1 : ' + RegExp.$1);
  document.writeln('$2 : ' + RegExp.$2);
  document.writeln('$3 : ' + RegExp.$3);
  document.writeln('<hr />');
}
