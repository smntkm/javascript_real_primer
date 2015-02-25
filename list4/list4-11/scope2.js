scope = 'Global Variable';

function getValue() {
  scope = 'Local Variable';
  return scope;
}

document.writeln(getValue());
document.writeln(scope);
