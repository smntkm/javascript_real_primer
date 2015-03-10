var y = 'Global';

function outerFunc() {
  var y = 'Local Outer';

  function innerFunc() {
    var z = 'Local Inner';

    document.writeln(z);
    document.writeln(y);
    document.writeln(x);
  }

  innerFunc();
}

outerFunc();
