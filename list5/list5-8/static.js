var Area = function() {};
Area.version = '1.0'
Area.triangle = function(base, height) {
  return base * height / 2;
};
Area.diamond = function(width, heigth) {
  return width * height;
}

document.writeln('Areaクラスのバーション：' + Area.version);
document.writeln('三角形の面積:' + Area.triangle(5, 3));
var a = new Area();
document.writeln('ひし形の面積:' + a.diamond(10, 2));
