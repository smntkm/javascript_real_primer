var str1 = ' にわにはにわにわとりがいる';
document.writeln(str1.indexOf('にわ'));
document.writeln(str1.lastIndexOf('にわ'));
document.writeln(str1.indexOf(' にわ', 3));
document.writeln(str1.lastIndexOf('わ', 5));
document.writeln(str1.indexOf('ガーデン'));

var str2 = 'Wings プロジェクト';
document.writeln(str2.charAt(4));
document.writeln(str2.slice(5, 8));
document.writeln(str2.substring(5, 8));
document.writeln(str2.substr(5, 3));
document.writeln(str2.split('s'));
document.writeln(str1.split('わ', 3));

document.writeln('トップ'.anchor('top'));
document.writeln(str2.link('http://www.wings.msn.to/'));
document.writeln('10'.sub());
document.writeln('10'.sup());

document.writeln(str2.concat('有限会社'));
document.writeln(str2.length);
