var scope = 'Global Variable';

function getValue() {
  document.writeln(scope);
  var scope = 'Local Variable';
  return scope;
}

document.writeln(getValue());
document.writeln(scope);
