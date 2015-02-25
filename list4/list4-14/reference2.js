var value = [1, 2, 4, 8, 16];

function deleteValue(value) {
  value.pop();
  return value;
}

document.writeln(deleteValue(value));
document.writeln(value);
