var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートはhttp://www.wings.msn.to/です';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく';

var result = p.exec(str);
for (var i = 0; i < result.length; i ++) {
  document.writeln(result[i]);
}
