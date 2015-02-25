var dat = new Date(2010, 4, 15, 11, 40);

document.writeln(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 3);
document.writeln(dat.toLocaleString());
dat.setDate(dat.getDate() - 20);
document.writeln(dat.toLocaleString());
