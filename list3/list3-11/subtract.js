var dat = new Date(2010, 4, 15);
var dat2 = new Date(2010, 5, 20);

var diff = (dat2.getTime() - dat.getTime()) / (1000 * 60 * 60 * 24);
document.writeln(diff + '日の差があります');
