var ary = [5, 25, 10];

document.writeln(ary.sort());
document.writeln(ary.sort(function(x, y) { return x - y; }));
