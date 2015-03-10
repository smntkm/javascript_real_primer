function closure(init) {
  var counter = init;

  return function() {
    return ++counter;
  }
}

var myClosure = closure(1);
document.writeln(myClosure());
document.writeln(myClosure());
document.writeln(myClosure());
