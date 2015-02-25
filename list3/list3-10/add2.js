var dat = new Date(2010, 4, 15, 11, 40);

document.writeln(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 1);
dat.setDate(0);
document.writeln(dat.toLocaleString());
