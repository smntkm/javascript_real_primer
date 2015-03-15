function closure(init) {
  var counter = init;

  return function() {
    return ++counter;
  }
}

var myClosure1 = closure(1);
var myClosure2 = closure(100);
document.writeln(myClosure1());
document.writeln(myClosure2());
document.writeln(myClosure1());
document.writeln(myClosure2());
