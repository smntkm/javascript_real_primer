var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートはhttp://www.wings.msn.to/です';
var str2 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく';

document.writeln(str.search(p));
document.writeln(str2.search(p));
