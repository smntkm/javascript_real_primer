var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートはhttp://www.wings.msn.to/です';
var str2 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく';

document.writeln(p.test(str));
document.writeln(p.test(str2));
