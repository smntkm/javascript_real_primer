function factorial(n) {
  if (n != 0) { return n * arguments.callee(n - 1); }
  return 1;
}

document.writeln(factorial(5));
