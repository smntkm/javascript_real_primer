var obj = new Object();

document.writeln(obj.toString());
document.writeln(obj.valueOf());

var dat = new Date();
document.writeln(dat.toString());
document.writeln(dat.valueOf());

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
document.writeln(ary.toString());
document.writeln(ary.valueOf());

var num = 10;
document.writeln(num.toString());
document.writeln(num.valueOf());

var reg = /[0-9]{3}-[0-9]{4}/g;
document.writeln(reg.toString());
document.writeln(reg.valueOf());
