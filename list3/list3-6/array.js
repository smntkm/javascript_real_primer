var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

document.writeln(ary1.concat(ary2));
document.writeln(ary1.join('/'));
document.writeln(ary1.slice(1));
document.writeln(ary1.slice(1, 2));
document.writeln(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));
document.writeln(ary1);

document.writeln(ary1.pop());
document.writeln(ary1);
document.writeln(ary1.push('Kondo'));
document.writeln(ary1);
document.writeln(ary1.shift());
document.writeln(ary1);
document.writeln(ary1.unshift('Ozawa', 'Kuge'));
document.writeln(ary1);

document.writeln(ary1.reverse());
document.writeln(ary1);
document.writeln(ary1.sort());
document.writeln(ary1);

document.writeln(ary1.length);
document.writeln(ary1.toString());
document.writeln(ary1);
