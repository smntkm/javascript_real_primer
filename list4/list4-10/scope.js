var scope = 'Global Variable';

function getValue() {
  var scope = 'Local Variable';
  return scope;
}

document.writeln(getValue());
document.writeln(scope);
