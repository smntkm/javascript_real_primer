var scope = 'Global Variable';

function checkScope() {
  var scope = 'Local Variable';

  var f_lit = function() { return scope; };
  document.writeln(f_lit());

  var f_con = new Function('return scope;');
  document.writeln(f_con());
  return scope;
}

checkScope();
