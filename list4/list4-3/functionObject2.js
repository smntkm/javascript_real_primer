var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);

document.writeln('菱形の面積：' + diamond(5, 2));
